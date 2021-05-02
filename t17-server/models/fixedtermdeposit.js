'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FixedTermDeposit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      FixedTermDeposit.belongsTo(models.User, { as: 'user' });
    }
  };
  FixedTermDeposit.init({
    amount: DataTypes.STRING,
    closingDate: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FixedTermDeposit',
  });
  return FixedTermDeposit;
};