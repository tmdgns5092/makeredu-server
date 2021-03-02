/* Controller */
const Chat  = require("../models").group_chat;
const utils = require("../dist/utils");
const Op    = require('sequelize').Op;

module.exports = {
    
    // 채팅 조회
    list(req, res) {
        Chat.findAll({ attributes: {exclude: []} })
        .then(chats => {
            return res.status(200).send(utils.successTure(chats));
        })
        .catch(error => {
            console.log(error);
            return res.status(500).send(utils.successFalse(error, null, 500));
        })
    },
    
    async(req,res){
        return Chat
          .sync({force:true})
          .then(()=>{ 
              console.log("Chats sync success...");
              return res.status(200).send();
          })
          .catch((error) => { 
              console.log("Chats sync error"); console.log(error);
              return res.status(500).send();
          });
  }
}