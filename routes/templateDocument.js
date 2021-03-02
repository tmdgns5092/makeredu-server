/* Router */
let express                     = require('express');
let router                      = express.Router();
let cors                        = require('cors');
let templateDocumentController   = require('../controllers').templateDocument;

// open process
router.post('/list',templateDocumentController.list);                       // 템플릿 조회
router.post('/create',templateDocumentController.add);

module.exports = router;