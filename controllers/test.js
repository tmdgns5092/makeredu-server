const User      = require("../models").user;
const Group     = require("../models").group;
const crypto    = require('crypto');
const utils     = require('../dist/utils.js');
const jwtObj    = require("../config/config-jwt");
const { Op }    = require("sequelize");
const jwt       = require('jsonwebtoken');

module.exports = {
    get(req, res){
        // console.log(">>>>>>>>>>>>> get");
        // console.log("query");
        // console.log(req.query);
        // console.log("body");
        // console.log(req.body);
        // console.log("param");
        // console.log(req.param);
        
        return res.status(200).send(utils.successTure(req.query));
    },
    post(req, res){
        // console.log(">>>>>>>>>>>>> post");
        // console.log("query");
        // console.log(req.query);
        // console.log("body");
        // console.log(req.body);
        // console.log("body.params");
        // console.log(req.body.params);
        // console.log("param");
        // console.log(req.param);
        
        return res.status(200).send(utils.successTure(req.body));
    },
    put(req, res){
        console.log(">>>>>>>>>>>>> put");
        console.log("query");
        console.log(req.query);
        console.log("body");
        console.log(req.body);
        console.log("body.params");
        console.log(req.body.params);
        console.log("param");
        console.log(req.param);
        
        return res.status(200).send(utils.successTure(req.body));
    },
    delete(req, res){
        // console.log(">>>>>>>>>>>>> delete");
        // console.log("query");
        // console.log(req.query);
        // console.log("body");
        // console.log(req.body);
        // console.log("param");
        // console.log(req.param);
        
        return res.status(200).send(utils.successTure(req.body));
    },
    createGroup(req, res) {
        let groupID = req.query.groupID;
        
        // request(`https://socket.makereducation.net?apikey=${API_KEY}`, {groupID: groupID}, (err, res, body) => {
            // 
        // });
    }
}