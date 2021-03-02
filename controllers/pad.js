/* Controller */
const utils             = require("../dist/utils")
const Etherpad          = require("@hiswe/etherpad-api")
const Sequelize         = require("sequelize")
const sequelizeConfig   = require("../config/config.json")
const sequelize         = new Sequelize(sequelizeConfig.development);
const User              = require("../models").user;
const Project           = require("../models").projectDocument;
const { Op }            = require("sequelize");

const etherpad = new Etherpad({
    url: `https://socket.makereducation.net`,
    apiKey: `9025e8e93f12def59bc5d29543be8bf685608a59e2be5a33fcb9b4d140b86411`,
})


module.exports = {
    
    // 모든 padID 호출
    listAllPads(req, res) {
        etherpad
            .listAllPads()
            .then(data => { console.log(data); return res.send(data)})
            .catch(error => {
                console.log(error)
                return res.status(500).send(utils.successFalse(error, null, 500));
            })
    },
    
    getHTML(req, res) {
        console.log('req : ');
        console.log(req)
        let padID = new String(req.body.padID);
        
        etherpad
            .getHTML(padID)
            .then(data => {
                console.log('success')
                console.log(data)
                return res.status(200).send(utils.successTure(data))
            })
            .catch(error => {
                console.log('error')
                console.log(error)
                return res.status(500).send(utils.successFalse(error, null, 500))
            })
    },
    user(req, res) {
        let authority = false;
        
        if(!req.query.padID)
            return res.send(utils.successFalse(null, 'padID is required!', 901));
        if(!req.query.myName)
            return res.send(utils.successFalse(null, 'myName is required!', 901));            
        
        sequelize.query("SELECT User.*, Pad.role as role FROM etherpad_lite_db.pads as Pad LEFT JOIN mrChuDB.users as User ON Pad.userid = User.id WHERE Pad.padid = '" + req.query.padID + "';")
        .then(([result, metadata]) => {
            for (var v in result) {
                if(result[v].name == req.query.myName && result[v].role == "admin")
                    authority = true;
            }
            
            res.status(200).send({users: result, authority: authority})
        });
    },
    users(req, res) {
        console.log(req.query)
        let idList = [];
        if(req.query.idList.indexOf(',') > -1)
            idList = req.query.idList.split(",");
        else if (req.query.idList.length > 0)
            idList.push(idList);
            
        if(idList.length < 1)
            return res.send(utils.successFalse(null, 'idList is required!', 901));
            
        User.findAll({
            where: {
                id: {[Op.notIn]: idList},
                status : 1
            },
            attributes: ['id', 'name', 'phone', 'email']
        })
        .then(users => res.status(200).send(users))
        .catch(error => {
            console.log(error)
            return res.status(500).send(utils.successFalse(error, null, 500));
        });
    },
    getReqestList(req, res) {
        sequelize.query(`
            SELECT userid 
            FROM etherpad_lite_db.pads
            where padid = '${req.query.padID}';`)
          .then(([result]) => {
            console.log(result);
            let array = new Array();
            result.forEach(function(value, index) {
		      array.push({ id: { [Op.ne]: value.userid } })
		    });
		    console.log(array);
		    
		    User.findAll({where: array})
		      .then(user => res.status(200).send(user))
		      .catch(error => res.status(500).send(error))
          })
          .catch()
    },
    userAdd(req, res) {
        console.log(req.body);
        
        let userIdArray = [];
        if(req.body.userIdArray.indexOf(',') > -1)
            userIdArray = req.body.userIdArray.split(",");
        else if (req.body.userIdArray.length > 0)
            userIdArray.push(req.body.userIdArray);
        
        if(!req.body.padID)
            return res.send(utils.successFalse(null, 'padID is required!', 901));
        if(userIdArray.length < 1)
            return res.send(utils.successFalse(null, 'userID is required!', 901));
        
        try{
            userIdArray.forEach(val => {
                sequelize.query("INSERT INTO etherpad_lite_db.pads (padid, userid, role) VALUES ('" + req.body.padID + "', '"+ val +"', 'user')")
                sequelize.query(`INSERT INTO mrChuDB.projectDocuments (user_id, document_id, project_title) VALUES (${val} , '${req.body.padID}', '${req.body.title}')`)
            })
        }catch(exception) {
            return res.status(500).send(utils.successFalse(exception, 'database insert excetpion', 500));
        }
        return res.status(200).send(utils.successTure(userIdArray));
    },
    deleteUser(req, res) {
        if(!req.body.userID)
            return res.send(utils.successFalse(null, 'userID is required!', 901));
        if(!req.body.padID)
            return res.send(utils.successFalse(null, 'padID is required!', 901))
            
        sequelize.query(`DELETE FROM etherpad_lite_db.pads WHERE padid='${req.body.padID}' AND userid='${req.body.userID}'`)
        .then(([result, metadata]) => res.status(200).send(result));
    }
}