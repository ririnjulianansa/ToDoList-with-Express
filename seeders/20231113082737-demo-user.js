'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
         name: 'rinsa pane',
         email: 'rinsa@gmail.com',
         username: "rinsa",
         password:'root',
         createdAt: new Date(),
         updatedAt: new Date()
       }], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
  }
};