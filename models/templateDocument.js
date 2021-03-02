'use strict';
module.exports = (sequelize, DataTypes) => {
  const templateDocument = sequelize.define('templateDocument', {
    id: {       
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false,
      comment: "프로젝트인덱스"
    },
    writer: {    
      type: DataTypes.INTEGER, 
      allowNull: false,
      comment: "작성자 아이디"
    },
    title: {    
      type: DataTypes.STRING, 
      allowNull: true,
      comment: "제목"
      
    },
    tempdoc: {   
      type: DataTypes.STRING, 
      allowNull: false, 
      defaultValue: 1,
      comment: "템플릿 이름"
    },
  }, {});
  
  templateDocument.associate = function(models) {
    //project.hasMany(models.project, {foreignKey: 'id'});
  templateDocument.hasMany(models.user, {foreignKey: 'id', sourceKey: 'writer'});
  };
  
  return templateDocument;
};