'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: "파일 테이블 인덱스"
      },
      file_name: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: "파일이름"
      },
      org_file_name: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: "기존 파일이름"
      },
      uploader_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        comment: "업로드 유저 인덱스"
      },
      pad_name: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: "패드 이름"
      },
      size: {
        type: Sequelize.STRING,
        defaultValue: 0,
        comment: "파일 크기"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('files');
  }
};