'use strict';
module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    id: {       
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false,
      comment: "그룹 인덱스"
    },title: {    
      type: DataTypes.STRING, 
      allowNull: false,
      comment: "그룹 제목"
      
    },status: {   
      type: DataTypes.INTEGER, 
      allowNull: false, 
      defaultValue: 1,
      comment: "그룹 상태 ( 1:시작, 2:진행중, 3:완료, 999:삭제 )"
      
    },master_id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: { 
        model:{ 
          tableName:'users',
          key:'id'
        }
      },
      comment: "소유자 인덱스"
    }
  }, {});
  
  group.associate = function(models) {
    // group.hasMany(models.groupMember, {foreignKey: 'user_id'});
    group.belongsTo(models.user, {foreignKey: 'master_id'});
    group.hasMany(models.group_member, {foreignKey: 'group_id', sourceKey: 'id'});
  };
  
  return group;
};