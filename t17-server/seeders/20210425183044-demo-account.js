'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Accounts', [{
      currency: 0,
      currencyType: 'ARS',
      userId: 1,
      createdAt: new Date,
      updatedAt: new Date,
    },{
      currency: 0,
      currencyType: 'USD',
      userId: 1,
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
