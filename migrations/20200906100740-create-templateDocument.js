'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('templateDocument', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: "프로젝트인덱스"
      },
      writer: {    
        type: Sequelize.INTEGER, 
        allowNull: false,
        comment: "작성자 아이디"
      },
      title: {   
        type: Sequelize.STRING, 
        allowNull: false, 
        defaultValue: 1,
        comment: "제목"
      },
      type:{
        type:Sequelize.STRING,
        allowNull: true,
        defaultValue:'private',
        comment:"템플릿타입"
      },
      tempdoc: {   
        type: Sequelize.STRING, 
        allowNull: false, 
        defaultValue: 1,
        comment: "템플릿 이름"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('templateDocument');
  }
};