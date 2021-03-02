'use strict';
module.exports = (sequelize, DataTypes) => {
  const file = sequelize.define('file', {
    id: {       
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false,
      comment: "파일 테이블 인덱스"
    },file_name: {    
      type: DataTypes.STRING, 
      allowNull: false,
      comment: "파일이름"
    },org_file_name: {   
      type: DataTypes.STRING, 
      allowNull: false, 
      comment: "기존 파일이름"
    },uploader_id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: { 
        model:{ 
          tableName:'users',
          key:'id'
        }
      },
      comment: "업로드 유저 인덱스"
    },pad_name: {   
      type: DataTypes.STRING, 
      allowNull: false, 
      comment: "패드 이름"
    },size: {   
      type: DataTypes.STRING, 
      defaultValue: 0,
      comment: "파일크기"
    }
  }, {});
  
  file.associate = function(models) {
    file.belongsTo(models.user, {foreignKey: 'uploader_id'});
  };
  
  return file;
};