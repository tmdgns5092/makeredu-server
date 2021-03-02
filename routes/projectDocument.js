/* Router */
let express                     = require('express');
let router                      = express.Router();
let cors                        = require('cors');
let projectDocumentController   = require('../controllers').projectDocument;
let utils                       = require("../dist/utils");

// open process
// router.get('/doc-read', utils.isLoggedin, projectDocumentController.read);
router.post('/list', projectDocumentController.list);
router.post('/create', projectDocumentController.add);

module.exports = router;