'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {       
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false,
      comment: "유저 인덱스"
    }, name: {     
      type: DataTypes.STRING, 
      allowNull: false,
      comment: "유저 이름"
    },password: { 
      type: DataTypes.STRING, 
      allowNull: true,
      comment: "유저 비밀번호"
    },phone: {    
      type: DataTypes.STRING, 
      allowNull: true,
      comment: "유저 휴대폰 번호( '-' 포함 문자열 )"
    },email: {    
      type: DataTypes.STRING, 
      allowNull: false,
      comment: "유저 이메일"
    },salt: {     
      type: DataTypes.STRING, 
      allowNull: true,
      comment: "유저 비밀번호 솔트"
    },
    status: {   
      type: DataTypes.INTEGER, 
      allowNull: false, 
      defaultValue: 1,
      comment: "유저 상태 ( 0:비활성화, 1:활성화 )"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "유저 종류 ( 0:로컬 소셜, 1:소셜 유저)"
    },
    social_user_id: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "소셜유저 고유 아이디"
    }
  }, {});
  user.associate = function(models) {
    user.hasMany(models.group, {foreignKey: 'master_id', sourceKey: 'id'});
    user.hasMany(models.friend, {foreignKey: 'sender_id', sourceKey: 'id'});
    user.hasMany(models.friend, {foreignKey: 'receiver_id', sourceKey: 'id'});
    user.hasMany(models.group_member, {foreignKey: 'user_id', sourceKey: 'id'});
    user.hasMany(models.file, {foreignKey: 'uploader_id', sourceKey: 'id'});
  };
  
  return user;
};