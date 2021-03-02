let express = require('express');
let router	= express.Router();
let utils 	= require("../dist/utils");
let testController  = require('../controllers').test;
let fs			= require("fs");
const Etherpad = require('@hiswe/etherpad-api');
const etherpad = new Etherpad({
  url: `https://socket.makereducation.net`,
  apiKey: `9025e8e93f12def59bc5d29543be8bf685608a59e2be5a33fcb9b4d140b86411`,
})

router.get(     '/', testController.get);       // 회원 조회
router.post(    '/', testController.post);      // 회원 가입
router.put(     '/', testController.put);       // 회원 로그인
router.delete(  '/', testController.delete);    // 회원 로그인
router.get(     '/listAllPads', (req, res) => {
     etherpad
        .listAllPads()
        .then(resData => res.send(resData))
        .catch(error => res.status(error,statusCode).json(error))
})



module.exports = router;
