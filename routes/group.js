/* Router */
let express          = require('express');
let router           = express.Router();
let cors             = require('cors');
let groupController  = require('../controllers').group;
let utils            = require("../dist/utils");

router.get(     '/',        utils.isLoggedin, groupController.one);                    // Object 그룹 조회 (소캣통신에 인덱스 활용하여 연결)
router.get(     '/list',    utils.isLoggedin, groupController.list);               // list   그룹 조회 (소캣통신에 인덱스 활용하여 연결)
router.post(    '/',        utils.isLoggedin, groupController.store);                  // 그룹 생성
router.delete(  '/',        utils.isLoggedin, groupController.delete);                 // 그룹 삭제 
router.put(     '/',        utils.isLoggedin, groupController.update);                 // 그룹 상태 변경 (1:시작, 2:진행중, 3:완료, 999:삭제)
router.post(    '/invite',  utils.isLoggedin, groupController.invite);           // 내 그룹 초대
router.get(     '/invited', utils.isLoggedin, groupController.invited);         // Object 내가 참여한 그룹 조회
router.get(     '/invited-list', utils.isLoggedin, groupController.invitedList);// list   내가 참여한 그룹 조회
router.get(     '/all-list',utils.isLoggedin, groupController.allList);         // list   내가 포함된 모든 그룹 조회


router.get(     '/async', groupController.async);

module.exports = router;