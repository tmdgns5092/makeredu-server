/* etherpad API TEST MiddleWare*/
let express         = require('express');
let router	        = express.Router();
let testController  = require('../controllers').test;


router.get('/createGroup', testController.createGroup);       // 그룹 생성


module.exports = router;
