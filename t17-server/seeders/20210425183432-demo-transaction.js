'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Transactions', [{
      amount: 150,
      concept: 'transaction',
      type: 'topup',
      accountId: 1,
      createdAt: new Date,
      updatedAt: new Date,
    },{
      amount: 150,
      concept: 'transaction',
      type: 'topup',
      accountId: 1,
      createdAt: new Date,
      updatedAt: new Date,
    },{
      amount: 5550,
      concept: 'transaction',
      type: 'topup',
      accountId: 2,
      createdAt: new Date,
      updatedAt: new Date,
    },{
      amount: 3150,
      concept: 'transaction',
      type: 'topup',
      accountId: 1,
      createdAt: new Date,
      updatedAt: new Date,
    },{
      amount: 1500,
      concept: 'transaction',
      type: 'payment',
      accountId: 2,
      createdAt: new Date,
      updatedAt: new Date,
    },{
      amount: 500,
      concept: 'transaction',
      type: 'payment',
      accountId: 2,
      createdAt: new Date,
      updatedAt: new Date,
    },], {});
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
