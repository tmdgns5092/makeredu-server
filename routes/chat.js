/* Router */
let express          = require('express');
let router           = express.Router();
let cors             = require('cors');
let chatController   = require('../controllers').chat;
let utils            = require("../dist/utils");

router.get('/', chatController.list);

router.get('/async', chatController.async);

module.exports = router;