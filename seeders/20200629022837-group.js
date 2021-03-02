'use strict';

var createdAt = new Date();
var updatedAt = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('groups', [{
      master_id:		1,
      Title:			  'title',
      createdAt:		createdAt,
      updatedAt:	  updatedAt,
        // name: 'John',
        // password: 'Doe',
        // phone: '010-3202-5092',
        // email: 'demo@demo.com',
        // salt: 'demo-salt',
        // createdAt: new Date(),
        // updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
