/* Controller */
const projectDocument   = require('../models').projectDocument;
const utils             = require('../dist/utils.js');
const jwtObj            = require('../config/config-jwt');
const sequelize         = require('sequelize');
const jwt               = require('jsonwebtoken');
const fs                = require('fs');
const docPath           = '/home/tmdgns5092/SocketAPI/.reposetory/';

module.exports = {
  // 이메일로 유저 조회
  // Param : mrChuDB.users.email
  list(req, res) {
      console.log(req);
    projectDocument.findAll({
        where: {
            user_id: req.body.userId
        },
        attributes: ['id', 'user_id', 'document_id','project_title'].concat([
            [sequelize.literal('(SELECT userid FROM etherpad_lite_db.pads WHERE etherpad_lite_db.pads.padid = mrChuDB.projectDocument.document_id and role="admin")'), 'adminUserId'],
            [sequelize.literal('(select name from mrChuDB.users where id=adminUserId)'),'admin_name']
        ]),
    })
    .then(projectData => {
        console.log('projectData')
        console.log(projectData);
        return res.status(200).send(utils.successTure(projectData));
    })
    .catch(error => {
        console.log(error);
        return res.status(500).send(utils.successFalse(error, null, 500));
    })
  },
  
  add(req,res){
    if(!req.body.title)
        return res.send(utils.successFalse(null, 'title is required!', 901));
    projectDocument.create({
        user_id: req.body.userid,
        document_id: req.body.docname,
        project_title: req.body.title
    })
    .then(() => res.status(200).send(utils.successTure('store group success')))
    .catch(error => {
        console.log(error);
        return res.status(500).send(utils.successFalse(error, null, 500));
    })
  }
  
 
}