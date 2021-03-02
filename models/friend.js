'use strict';
module.exports = (sequelize, DataTypes) => {
  const friend = sequelize.define('friend', {
    id: {       
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false,
      comment: "친구 인덱스"
    },
    sender_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: { 
        model:{ 
          tableName:'users',
          key:'id'
        }
      },
      comment: "요청 유저 인덱스"
    },
    receiver_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: { 
        model:{ 
          tableName:'users',
          key:'id'
        }
      },
      comment: "수신 유저 인덱스"
    },
    status: {
      type:DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "친구 상태 -1: 거절, 0:대기, 1:수락)"
    }
  }, {});
  friend.associate = function(models) {
    // associations can be defined here
    friend.belongsTo(models.user, {foreignKey: 'sender_id', targetKey: 'id'});
    friend.belongsTo(models.user, {foreignKey: 'receiver_id', targetKey: 'id'});
  };
  return friend;
};