/* Controller */
const templateDocument   = require("../models").templateDocument;
const user   = require("../models").user;
const utils             = require('../dist/utils.js');
const jwtObj            = require("../config/config-jwt");
const { Op }            = require("sequelize");
const jwt               = require('jsonwebtoken');

module.exports = {
  // 이메일로 유저 조회
  // Param : mrChuDB.users.email
  list(req, res) {
    templateDocument.findAll({
        include: [{
        model: user,
        on: { id: {[Op.col]: 'templateDocument.writer'} },
        attributes:['name'],
       }],
        attributes: ['id', 'title', 'tempdoc','type'],
        where:{[Op.or]: [{writer:req.body.userId},{type:"public"}]},
    })
    .then(projectData => {
        return res.status(200).send(utils.successTure(projectData));
    })
    .catch(error => {
        console.log(error);
        return res.status(500).send(utils.successFalse(error, null, 500));
    })
  },
  add(req,res){
    console.log(req.body)
    if(!req.body.title)
        return res.send(utils.successFalse(null, 'title is required!', 901));
    templateDocument.create({
        writer: req.body.userid,
        title:  req.body.title,
        tempdoc: req.body.docname
    })
    .then(() => res.status(200).send(utils.successTure('store group success')))
    .catch(error => {
        console.log(error);
        return res.status(500).send(utils.successFalse(error, null, 500));
    })
  }
  
 
}