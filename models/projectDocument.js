'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectDocument = sequelize.define('projectDocument', {
    id: {       
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false,
      comment: "프로젝트인덱스"
    },user_id: {    
      type: DataTypes.INTEGER, 
      allowNull: false,
      comment: "유저 아이디"
      
    },document_id: {   
      type: DataTypes.STRING, 
      allowNull: false, 
      defaultValue: 1,
      comment: "공유문서 아이디"
    },project_title:{
      type: DataTypes.STRING, 
      allowNull: false, 
      defaultValue: "",
      comment: "프로젝트 타이틀"
    }
  }, {});
  
  projectDocument.associate = function(models) {
    //project.hasMany(models.project, {foreignKey: 'id'});
   
  };
  
  return projectDocument;
};