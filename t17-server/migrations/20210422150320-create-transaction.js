'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable("Transactions", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        amount: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        concept: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        type: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        accountId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
              model: 'Accounts',
              key: 'id',
            }
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Transactions");
  }
};
