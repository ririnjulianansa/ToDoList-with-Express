'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Todos', [{
         value : 'Belajar Express',
         status: false,
         user_id: 3,
         createdAt: new Date(),
         updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
  }
};