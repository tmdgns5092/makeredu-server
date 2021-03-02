/* Router */
let express          = require('express');
let router           = express.Router();
let cors             = require('cors');
let friendController  = require('../controllers').friend;
let utils            = require("../dist/utils");

router.post('/',             utils.isLoggedin, friendController.invite);         // 친구 초대
router.put( '/accept',       utils.isLoggedin, friendController.accept);         // 친구 수락
router.get( '/',             utils.isLoggedin, friendController.findName);       // 친구 조회
router.get( '/list',         utils.isLoggedin, friendController.list);           // 친구 조회 list
router.get( '/request-list', utils.isLoggedin, friendController.requestList);    // 수락 대기중인 신청 리스트
router.put( '/reject',       utils.isLoggedin, friendController.reject);         // 친구 거절
router.get( '/reject-list',  utils.isLoggedin, friendController.rejectList);         // 친구 거절

// router.get('/chat',     utils.isLoggedin, friendController.one);        // 친구 채팅

module.exports = router;