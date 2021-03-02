/* Controller */
const User      = require("../models").user;
const Group     = require("../models").group;
const crypto    = require('crypto');
const utils     = require('../dist/utils.js');
const jwtObj    = require("../config/config-jwt");
const { Op }    = require("sequelize");
const jwt       = require('jsonwebtoken');

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

module.exports = {
  // 이메일로 유저 조회
  // Param : mrChuDB.users.email
  one(req, res) {
    if(utils.uk(req.query.email) == "")
      return res.send(utils.successFalse(null, "email is required!", 901));
    return User
      .findOne({ 
          where: {email: utils.uk(req.query.email)},
          attributes: ['id', 'name', 'phone', 'email', 'createdAt','salt']
        })
      .then(user => res.send(utils.successTure(user)))
      .catch(error => {
        console.log(error);
        res.status(500).send(utils.successFalse(error, null, 500))
      });
  },
  
  list(req, res) {
    return User
      .findAndCountAll({
        attributes: {exclude: ['password', 'salt']}
      })
      .then(user => {
        res.status(200).send(utils.successTure(user));
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(utils.successFalse(error, null, 500))
      });
  },
  
  // 회원가입
  // Param : mrChuDB.users.name, password, email, phone
  add(req, res) {
    const params = [utils.uk(req.body.params.name), 
      utils.uk(req.body.params.password), 
      utils.uk(req.body.params.email), 
      utils.uk(req.body.params.phone)
    ];
    let emptyValue = "";
    params.forEach(function(v, k) {
      if(v == "" && k == 0) emptyValue = "name"
      else if(v == "" && k == 1) emptyValue = "password"
      else if(v == "" && k == 2) emptyValue = "email"
      else if(v == "" && k == 3) emptyValue = "phone"
    });
    
    if(utils.uk(emptyValue) != "")  // 회원가입에 필요한 데이터 전달받지 못함
      // return res.status(901).send(utils.successFalse(null, `Undefined ${emptyValue}`, 901));
      return res.send(utils.successFalse(null, `Undefined ${emptyValue}`, 901));
    else {
      return User.findAll({
        where: {email: utils.uk(req.body.params.email)}
        })
        .then(user => {
          if(user.length > 0){
            return res.send(utils.successFalse(null, "Already a Email", 902));  
          }
          else {
            let key = utils.pbkdf2AsyncNonSalt(crypto, req.body.params.password);
            key.then((successMessage) => {
              return User
                .create({
                  name:     req.body.params.name,
                  password: successMessage.key,
                  email:    req.body.params.email,
                  phone:    req.body.params.phone,
                  salt:     successMessage.salt
                })
                .then(user   => res.status(200).send(utils.successTure("SignUp Success..")))
                .catch(error => {
                  console.log(error);
                  res.status(500).send(utils.successFalse(error, null, 500))
                });
            });  
          }
        })
        .catch(error => {
          console.log(error);
          res.status(500).send(utils.successFalse(error, null, 500))
        });
    }
  },
  
  // 소셜 회원가입
  socialAdd(req, res) {
    const params = [utils.uk(req.body.name), 
      utils.uk(req.body.email), 
      utils.uk(req.body.userID)
    ]
    let emptyValue = ""
    
    params.forEach((v, k) => {
      if(v == "" && k == 0) emptyValue = "name"
      else if(v == "" && k == 1) emptyValue = "email"
      else if(v == "" && k == 2) emptyValue = "userID"
    })
    
    if(utils.uk(emptyValue) != "")  // 회원가입에 필요한 데이터 전달받지 못함
      return res.send(utils.successFalse(null, `Undefined ${emptyValue}`, 901));
    else {
      User.findAll({
        where: {email: utils.uk(req.body.email)}
      })
      .then(user => {
        if(user.length > 0){
          return res.send(utils.successFalse(null, "Already a Email", 902));
        }
        else {
            const saltkey = uuidv4();
            return User.create({
                name:           req.body.name,
                email:          req.body.email,
                type:           1,
                salt:           saltkey,
                social_user_id: req.body.userID
            })
            .then(user   => User.findOne({ 
                              where: {email: utils.uk(req.body.email)},
                              attributes: ['id', 'name', 'phone', 'email', 'createdAt','salt']
                            })
                          .then(user => res.send(utils.successTure(user))))
            .catch(error => {
              console.log(error);
              res.status(500).send(utils.successFalse(error, null, 500))
            })
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(utils.successFalse(error, null, 500))
      });
    }
  },
  
  // 회원정보 수정
  // Param : mrChuDB.users.email, name, phone
  update(req, res) {
    const params = [utils.uk(req.body.params.name), utils.uk(req.body.params.phone)];
    let emptyValue = "";
    params.forEach(function(v, k) {
      if(v == "" && k == 0) emptyValue = "name";
      else if(v == "" && k == 1) emptyValue = "phone";
    });
    if(utils.uk(emptyValue) != "")
      return res.send(utils.successFalse(null, `Undefined ${emptyValue}`, 901));

    User.update(
      {
        name:   req.body.params.name,
        phone:  req.body.params.phone
      },
      {
        where: { 
          email:   req.decoded.email
        }
      }
    )
    .then(user => res.status(200).send(utils.successTure(user)))
    .catch(error => {
      console.log(error);
      res.status(500).send(utils.successFalse(error, null, 500))
    })
  },
  
  // 유저 탈퇴
  // Param : mrChuDB.users.id
  delete(req, res) {
    return User
      .findByPk(req.decoded.id, {exclude: ['password', 'salt']})
      .then(user => {
        if (!user) 
          return res.send(utils.successFalse(null, "not found user", 900));
          
        return user
          .update({ status: 0})
          .then(() => res.status(200).send(utils.successTure(null)))
          .catch(error => {
            console.log(error);
            res.status(500).send(utils.successFalse(error, null, 500))
          });
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(utils.successFalse(error, null, 500))
      });
  },
  
  // 로컬 로그인
  // Param : mrChuDB.users.email, password
  login(req, res) {
    if(utils.uk(req.query.email) == "" || utils.uk(req.query.password) == "")
      return res.send(utils.successFalse(null, `required! paramter`, 901));
      
    return User
      .findOne({
        where: {email:req.query.email}
      })
      .then(user => {
        if (!user)
          return res.send(utils.successFalse(null, "Email Confirmation does not matched", 900));
        
        let key = utils.pbkdf2Async(crypto, user.salt, req.query.password);
        key.then((successMessage) => {
          if(successMessage.key != user.password)
            return res.send(utils.successFalse(null, "Password Confirmation does not matched", 901));
          else {
            var payload = {
              id :    user.id,
              email : user.email,
              name :  user.name,
              type:   'local'
            };
            var secretKey = jwtObj.secret;
            var options = {
              algorithm: "HS512",
              expiresIn: 600*100*30
            };   
            
            jwt.sign(payload, secretKey, options, (error, token) => {
              if(error){
                console.log(error);
                return res.status(500).send(utils.successFalse(error, null, error));
              } else
                // return res.status(200).send(utils.successTure(token));
                return res.status(200).send(utils.successTure(token))
            });
          }
        });
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(utils.successFalse(error, null, 500));
      });
  },
  
  // 소셜 로그인
  // email userID 
  socialLogin(req, res) {
    if(utils.uk(req.query.email) == "" || utils.uk(req.query.userID) == "")
      return res.send(utils.successFalse(null, `required! paramter`, 901));
    
    User.findOne({
      where: {
        email:            req.query.email,
        social_user_id :  req.query.userID
      }
    })
    .then(user => {
      if (!user)
        return res.send(utils.successFalse(null, "Email Confirmation does not matched", 900));
      // jwt 토큰 생성
      var payload = {
            id :    user.id,
            email : user.email,
            name :  user.name,
            type:   'social'
          };
      var secretKey = jwtObj.secret;
      var options = {
        algorithm: "HS512",
        expiresIn: 600*100*30
      };   
          
      jwt.sign(payload, secretKey, options, (error, token) => {
        if(error){
          console.log(error);
          return res.status(500).send(utils.successFalse(error));
        } else
          return res.status(200).send(utils.successTure(token));
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(utils.successFalse(error, null, 500));
    });
  },
  
  async(req,res){
    return User
      .sync({force:true})
      .then(()=>{ 
        console.log("user sync success...");
        return res.status(200).send();
      })
      .catch((error) => { 
        console.log(error);
        return res.status(500).send();
      });
  }
}