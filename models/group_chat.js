'use strict';
module.exports = (sequelize, DataTypes) => {
  const group_chat = sequelize.define('group_chat', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        comment: "그룹 채팅 테이블 인덱스"
      },
      sender_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
            key: 'id'
          }
        },
        comment: "채팅 발송유저 인덱스"
      },
      group_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'groups',
            key: 'id'
          }
        },
        comment: "그룹 인덱스"
      },
      message: {
        allowNull: false,
        type: DataTypes.STRING,
        comment: "채팅 문자"
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {});
  group_chat.associate = function(models) {
    // associations can be defined here
    group_chat.belongsTo(models.group, { foreignKey: 'group_id', targetKey: 'id'});
    group_chat.belongsTo(models.user, { foreignKey: 'sender_id', targetKey: 'id'});
  };
  return group_chat;
};