/* Router */
let express          = require('express');
let router           = express.Router();
let cors             = require('cors');
// let utils            = require("../dist/utils");
let padController    = require('../controllers').pad;

router.get('/group/listAllPads', /*utils.isLoggedin, */padController.listAllPads);     // 모든 패드데이터 호출 
router.get('/group/getHTML', padController.getHTML)

router.get('/user',          padController.user);           // 참여유저 출력
router.get('/users',         padController.users);          // 초대 유저리스트 호출
router.get('/getReqestList', padController.getReqestList);  // 초대 유저리스트 호출2
router.post('/users',        padController.userAdd);        // 프로젝트에 유저 초대
router.delete('/user',       padController.deleteUser);     // 참여유저 추방


module.exports = router;