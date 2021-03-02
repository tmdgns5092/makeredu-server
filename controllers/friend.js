/* Controller */
const Friend            = require("../models").friend;
const User              = require("../models").user;
const utils             = require("../dist/utils");
const Op                = require('sequelize').Op;
const sequelize         = require('sequelize');
const { QueryTypes }    = require('sequelize');


module.exports = {
    // 친구 요청 발송
    // email, 
    invite(req, res) {
        if(!req.body.params.email || req.decoded.email == req.body.params.email)
            return res.send(utils.successFalse(null, 'target email is required!', 901));
            
        // 요청할 유저 조회    
        User.findOne({
            where: {
                email: req.body.params.email
            }
        })
        .then(user => {
            if(!user)
                return res.send(utils.successFalse(null, 'target user not found!', 900));
            else {
                // 발송한 요청 조회
                Friend.findOne({ 
                    where: {
                        [Op.or]: [
                            {
                                sender_id:      req.decoded.id,
                                receiver_id:    user.id
                            },
                            {
                                sender_id:      user.id,
                                receiver_id:    req.decoded.id
                            }
                        ],
                        status: { [Op.ne]: -1 }
                    }
                })
                .then((beforRequest) =>{
                    // 발송된 요청이 없을경우 요청 발송
                    if(!beforRequest){
                        Friend.create({
                            sender_id:      req.decoded.id, 
                            receiver_id:    user.id
                        })
                        .then(() => res.status(200).send(utils.successTure(null)))
                        .catch(error => {
                            console.log(error);
                            return res.status(500).send(utils.successFalse(error, null, 500));
                        })
                    }
                    // 수락 또는 수락 대기중인 건 있을경우 902 리턴
                    else 
                        return res.send(utils.successFalse(null, 'Already a Request', 902));
                })
                .catch(error => {
                    console.log(error);
                    return res.status(500).send(utils.successFalse(error, null, 500));
                });
            }
        })
        .catch(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        });
    },
    
    // 수락 대기중인 신청 리스트
    requestList(req, res) {
        User.findAll({
            include: { 
                model: Friend,
                on: {
                    sender_id:    {[Op.col]: 'user.id'}
                },
                where: {
                    receiver_id:    req.decoded.id,
                    status:         0
                },
                attributes: ['createdAt', 'updatedAt', ['id', 'friend_id']]
            },
            attributes: ['id', 'name', 'phone', 'email']
        })
        .then(reqUsers => {
            return res.status(200).send(utils.successTure(reqUsers));
        })
        .catch(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        })
    },
    
    // 친구관계인 유저 조회
    findName(req, res) {
        if(!req.query.name)
            return res.send(utils.successFalse(null, 'target name is required!', 901));
        User.findAll({
            include: [{ 
                model: Friend,
                attributes: ['updatedAt', 'createdAt'],
                // INNER JOIN 트리거인듯? 없으면 LEFT OUTER JOIN으로 됨
                // 추가적으로 ON 절의 조건을 주고 싶으면 여기다가 적으면 됨
                // 또는 조인할 테이블의 조건을 사용해도 됨
                on: {
                    [Op.or]: [
                        {receiver_id: {[Op.col]: 'user.id'}},
                        {sender_id: {[Op.col]: 'user.id'}}
                    ]
                },
                where: {
                    status: 1,
                    [Op.or]: [ 
                        {receiver_id:   req.decoded.id},
                        {sender_id:     req.decoded.id},
                    ]
                }
            }],
            attributes: [
                'id', 
                'name', 
                'phone', 
                'email', 
                ['status', 'user_status']
            ],
            where : { 
                name: {
                    [Op.like]: `%${req.query.name}%` 
                },
                id : {
                    [Op.ne] : req.decoded.id
                },
            }
        })
        .then(users => {
            if(!users)
                return res.send(utils.successFalse(null, 'frined not found', 900));
            else {
                return res.status(200).send(utils.successTure(users));
            }
        })
        .catch(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        });
    },
    
    list(req, res) {
        User.findAll({
            include: {
                model: Friend,
                on: {
                    [Op.or]: [
                        {receiver_id: {[Op.col]: 'user.id'}},
                        {sender_id: {[Op.col]: 'user.id'}}
                    ]
                },
                attributes: ['createdAt', 'updatedAt']
            },
            where: {
                id: {[Op.ne]: req.decoded.id},
                '$friends.status$': 1
            }
        })
        .then(list => res.status(200).send(utils.successTure(list)))
        .catch(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        })
    },
    
    // 수락 대기중인 요청 수락
    accept(req, res) {
        if(!req.body.params.accept_id)
            return res.send(utils.successFalse(null, 'target accept user id is required!', 901));
        Friend.findOne({
            where: {
                sender_id:      req.body.params.accept_id,
                receiver_id:    req.decoded.id
            }
        })
        .then(requestFriend => {
            if(!requestFriend)
                return res.send(utils.successFalse(null, 'target request not found!', 900));
            else { 
                console.log(utils.date());
                requestFriend.update({
                    status: 1,
                    updatedAt: utils.date()
                })
                .then(request => {
                    return res.status(200).send(utils.successTure(request));
                })
                .catch(error => {
                   console.log(error); 
                   return res.status(500).send(utils.successFalse(error, null, 500));
                })
            }
        })
        .catch(error => {
           console.log(error); 
           return res.status(500).send(utils.successFalse(error, null, 500));
        })
    },
    
    // 수신 받은 친구 신청 거절
    reject(req, res) {
        if(!req.body.params.friend_request_id)
            return res.send(utils.successFalse(null, 'friend table id is required!', 901));
            
        Friend.findOne({
            where: {
                receiver_id:    req.decoded.id,
                id:             req.body.params.friend_request_id
            }
        })
        .then(friend => {
            if(!friend)
                return res.send(utils.successFalse(null, 'target request not found!', 900));
            friend.update({ status: -1 })
            .then(frine => res.status(200).send(utils.successTure('request reject ...')))
            .catch(error => {
                console.log(error)
                return res.status(500).send(utils.successFalse(error, null, 500));
            })
        })
        .catch(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        })
    },
    
    // 거절한 친구 리스트
    rejectList(req, res) {
        User.findAll({
            include: {
                model: Friend,
                on: {
                    sender_id: {[Op.col]: 'user.id'}
                },
                attributes: ['createdAt', 'updatedAt'],
                where: {
                    receiver_id: req.decoded.id,
                    status: -1
                }
            },
        })
        .then(rejectList => res.status(200).send(utils.successTure(rejectList)))
        .catch(error => {
            console.log(error)
            return res.status(500).send(utils.successFalse(error, null, 500));
        })
    }
}