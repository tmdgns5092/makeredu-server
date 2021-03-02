let express          = require('express');
let router           = express.Router();
let cors             = require('cors');
let utils            = require("../dist/utils");
let controller       = require("../controllers/file");


router.post("/upload/:padID",   utils.isLoggedin,  controller.upload);
router.get("/files",            utils.isLoggedin,  controller.getListFiles);
router.get("/files/:name",      controller.download);
router.get("/filesLink/",  controller.fileList);

module.exports = router;