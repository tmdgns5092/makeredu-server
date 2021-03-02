'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: "유저 인덱스"
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "유저 이름"
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "유저 비밀번호"
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "유저 휴대폰 번호( '-' 포함 문자열 )"
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "유저 이메일"
      },
      salt: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "유저 비밀번호 솔트"
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: "유저 상태 ( 0:비활성화, 1:활성화 )"
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "유저 종류 ( 0:로컬 소셜, 1:소셜 유저)"
      },
      social_user_id: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "소셜유저 고유 아이디"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
      
      /* 외래키 예제 */
      // 외래키 컬럼: {
      //   type: 타입,
      //   references: {
      //     model: {
      //       tableName: '타겟 테이블 명',
      //       schema: '스키마'
      //     }
      //     key: '타겟에서 가져올 컬럼 명'
      //   },
      //   allowNull: false
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
    /* 트랜젝션 예 (두 가지 변경 중 하나 이상의 실패시 트랜젝션 발생) */
    // return queryInterface.sequelize.transaction((t) => {
    //         return Promise.all([
    //             queryInterface.removeColumn('테이블', 'petName', { transaction: t }),
    //             queryInterface.removeColumn('테이블', 'favoriteColor', { transaction: t })
    //         ])
    //     })
    
  }
};