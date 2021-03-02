'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('friends', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: "친구 인덱스"
      },
      sender_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        comment: "요청 유저 인덱스"
      },
      receiver_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },        
        comment: "수신 유저 인덱스"
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue : 0,
        comment: "친구 상태 (-1: 거절, 0:대기, 1:수락)"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: "요청일"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: "응답일"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('friends');
  }
};