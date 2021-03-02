/* Controller */
const Group         = require("../models").group;
const GroupMember   = require("../models").group_member;
const User          = require("../models").user;
const utils         = require("../dist/utils");
const Op            = require('sequelize').Op;

module.exports = {
    
    // 나의 그룹 조회
    // title
    one(req, res) {
        if(!req.query.title)
            return res.send(utils.successFalse(null, 'title is required!', 901));
        Group.findOne({
            where : {
                title :     req.query.title,
                master_id:  req.decoded.id
            }
        })
        .then(group => res.status(200).send(utils.successTure(group)))
        .catch(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        })
    },
    
    // 내 소유의 모든 그룹 조회
    // - 
    list(req, res) {
        Group.findAll({
            where: {
                master_id: req.decoded.id
            }
        })
        .then(groups => res.status(200).send(utils.successTure(groups)))
        .catch(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        });
    },
    
    // 그룹 생성
    // title
    store(req, res) {
        if(!req.body.params.title)
            return res.send(utils.successFalse(null, 'title is required!', 901));
        Group.create({
            master_id:  req.decoded.id,
            title:      req.body.params.title
        })
        .then(() => res.status(200).send(utils.successTure('store group success')))
        .catch(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        })
    },
    
    // 그룹 삭제
    // title
    delete(req, res) {
        Group.destroy({
            where: {
                master_id:  req.decoded.id,
                title:      req.query.title 
            }
        })
        .then(() => res.status(200).send(utils.successTure('delete success..')))
        .catch(error => {
            console.log(error)
            return res.status(500).send(utils.successFalse(error, null, 500))
        })
    },
    
    // 그룹 상태 변경 (1:시작, 2:진행중, 3:완료, 999:삭제)
    // title, status
    update(req, res) {
        if(req.body.params.status != 1 ||
            req.body.params.status != 2 ||
            req.body.params.status != 3 ||
            req.body.params.status != 999) 
            return res.send(utils.successFalse(null, 'required status ', 901))
            
        Group.findOne({
            where: {
                master_id:  req.decoded.id,
                title:      req.body.params.title
            }
        })
        .then(group => {
            if(!group)
                return res.send(utils.successFalse(null, 'not found group', 900))
            group.update({
                status: req.body.params.status
            })
            .then(() => res.status(200).send(utils.successTure('status update success ...')))
            .catch(error => {
                console.log(error)
                return res.status(500).send(utils.successFalse(error, null, 500))
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(500).send(utils.successFalse(error, null, 500))
        })
    },
    
    // 내 소유 그룹에 초대
    // email, title
    async invite(req, res) {
        
        let user = await getUserId(req.body.params.email);
        let group = await getGroupId(req.body.params.title, req.decoded.id);
        
        if(!user)
            return res.send(utils.successFalse(null, 'not found user', 901));
        if(!group)
            return res.send(utils.successFalse(null, 'not found group', 901));
    
        GroupMember.findOne({
            where: {
                group_id:   group.id,
                user_id:    user.id
            }
        })
        .then(groupRes => {
            if(!groupRes) {
                GroupMember.create({
                    group_id: group.id,
                    user_id: user.id
                })
                .then(() => res.status(200).send(utils.successTure('invite success ...')))
                .catch(error => {
                    console.log(error);
                    return res.status(500).send(utils.successFalse(error, null, 500));
                })
            } else
                return res.send(utils.successFalse(null, 'Already invite ...', 902));
        })
        .error(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        })
    },
    
    // 참여한 그룹 검색
    // title
    invited(req, res){
        GroupMember.findOne({
            include:{
                model: Group,
                on: {
                    id: {[Op.col]: 'group_member.group_id'}
                },
                attributes: ['id', 'title'],
                title: {
                    [Op.like]: `%${req.query.title}%`
                }
            },
            where: {
                user_id: req.decoded.id
            }
        })
        .then(group => res.status(200).send(utils.successTure(group)))
        .catch(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        })
    },
    
    // 참여한 그룹 리스트
    // -
    invitedList(req, res){
        GroupMember.findAll({
            include: {
                model: Group,
                on: { id: {[Op.col]: 'group_member.group_id'} }
            },
            where: { user_id: req.decoded.id },
            attributes: []
        })
        .then(groups => res.status(200).send(utils.successTure(groups)))
        .catch(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        })
    },
    
    // 내가 포함된 모든 그룹 리스트
    // - 
    async allList(req, res) {
        const result = await getInviteGoupsId(req.decoded.id);
        let group_member_ids = [];
        
        result.forEach((v, k) => { group_member_ids.push(v.id);});
        
        Group.findAll({
            include: {
                model: User,
                on: {
                    id: {[Op.col]: 'group.master_id'}
                },
                attributes: ['id', 'email', 'phone']
            },
            where: {
                [Op.or]: [
                    {master_id: req.decoded.id},
                    {id: {
                        [Op.or]: group_member_ids
                        }
                    }
                ]
                
            }
        })
        .then(groups => {
            return res.status(200).send(utils.successTure(groups));
        })
        .catch(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        })
    },
    
    async(req,res){
        return Group
          .sync({force:true})
          .then(()=>{ 
              console.log("Groups sync success...");
              return res.status(200).send();
          })
          .catch((error) => { 
              console.log("Groups sync error"); console.log(error);
              return res.status(500).send();
          });
  }
}

function getUserId(email_address) {
   return User.findOne({
     where: {
       email:   email_address
     },
     attributes: ['id']
   })
   .then(user => {
       return user
   })
   .catch(() => {
       return null
   })
}

function getGroupId(group_title, master_id) {
   return Group.findOne({
     where: {
       title:       group_title,
       master_id:   master_id
     },
     attributes: ['id']
   })
   .then(group => {
       return group
   })
   .catch(() => {
       return null
   })
}

function getInviteGoupsId(user_id) {
    return GroupMember.findAll({
        where: {
            user_id:    user_id
        },
        attributes: [ ['group_id', 'id']]
    })
    .then(groups => {
        return groups
    })
    .catch(() => {
        return null
    })
}