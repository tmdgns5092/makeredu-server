const uploadFile  = require("../dist/upload");
const utils       = require("../dist/utils");
const File        = require("../models").file;
const sequelize   = require("sequelize");

const upload = async (req, res) => {
  console.log('file .. ');
  console.log(req.file);
  
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    } 
    
    // DB insert
    let data = {
      file_name:      utils.simple_date() + "_" + req.file.originalname,
      org_file_name:  req.file.originalname,
      uploader_id:    req.decoded.id,
      pad_name:       req.params.padID,
      size:           req.file.size
    };
    File.create(data)
      .then(() => console.log('DB saved'))
      .catch(error => console.log(error));

    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

const fileList = (req, res) => {
  let padID;
  
  if (req.query.padID) padID = req.query.padID;
  else return res.status(500).send({Message: 'padID is required!'});
  
  let option = { 
      where: {
        pad_name: padID
      },
      // attributes: [
      //   'id',
      //   'file_name',
      //   'org_file_name',
      //   'uploader_id',
      //   'pad_name',
      //   'size',
      //   'createAt',
      //   'updateAt',
      //   sequelize.literal('SUBSTRING(description_column, 1, 200) as description_column')
      // ]
    };
  
  File.findAll(option)
    .then(files => {
      console.log(files);
      res.status(200).send(files)
      
    })
    .catch(error => {
      console.log(error);
      return res.status(500).send(utils.successFalse(error, null, 500));
    });
};

module.exports = {
  upload,
  getListFiles,
  download,
  fileList,
};