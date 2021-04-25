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
      // define association here
    }
  };
  FixedTermDeposit.init({
    amount: DataTypes.STRING,
    closinngDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'FixedTermDeposit',
  });
  return FixedTermDeposit;
};