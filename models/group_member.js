'use strict';
module.exports = (sequelize, DataTypes) => {
  const group_member = sequelize.define('group_member', {
    id: {       
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false,
      comment: "그룹 참여자 테이블 인덱스"
    }, group_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:{
          tableName:'groups',
          key:'id'
        }
      },
      comment: "그룹 인덱스"
    }, user_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:{
          tableName:'users',
          key:'id'
        }
      },
      comment: "유저 인덱스"
    }
  }, {});
  group_member.associate = function(models) {
    // associations can be defined here
    group_member.belongsTo(models.group, {foreignKey: 'group_id', targetKey: 'id'});
    group_member.belongsTo(models.user, {foreignKey: 'user_id', targetKey: 'id'});
  };
  return group_member;
};