/* Router */
let express         = require('express');
let router          = express.Router();
let cors            = require('cors');
let userController  = require('../controllers').user;
let utils           = require("../dist/utils");
let User            = require("../models").user;

// router.use(cors());

// open process
router.get(     '/',             userController.one);                       // 회원 조회
router.post(    '/',             userController.add);                       // 회원 가입
router.get(     '/login',        userController.login);                // 회원 로그인
router.post(    '/social',       userController.socialAdd);           // 소셜 회원 가입
router.get(     '/social-login', userController.socialLogin);   // 소셜 회원 가입

// auth process
router.put(     '/',        utils.isLoggedin, userController.update);          // 회원 업데이트
router.delete(  '/',        utils.isLoggedin, userController.delete);          // 회원 비활성화
router.get(     '/list',    userController.list);        // 회원 리스트
router.get(     '/async',   utils.isLoggedin, userController.async);      // 회원 테이블 매치

module.exports = router;