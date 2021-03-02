'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projectDocument', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: "프로젝트인덱스"
      },
      project_id: {    
        type: Sequelize.INTEGER, 
        allowNull: false,
        comment: "프로젝트 아이디"
      },document_id: {   
        type: Sequelize.STRING, 
        allowNull: false, 
        defaultValue: 1,
        comment: "공유문서 아이디"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('projectDocument');
  }
};