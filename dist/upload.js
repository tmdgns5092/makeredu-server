// Middleware
const util    = require("util");
const multer  = require("multer");
const utils   = require("../dist/utils");
const maxSize = 50 * 1024 * 1024;

let storage = multer.diskStorage({
  // Upload file path Setting
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  // Upload file name Setting
  filename: (req, file, cb) => {
    cb(null, utils.simple_date() + "_" + file.originalname);
  }
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;