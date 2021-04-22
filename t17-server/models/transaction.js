"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

        /**
         *Tipo de transaccion: topup o payment
         * */

        static associate(models) {
            Transaction.belongsTo(models.Account, { as: "account" });
        }
    }
    Transaction.init(
        {
            amount: { type: DataTypes.INTEGER, allowNull: false },
            concept: { type: DataTypes.STRING, allowNull: false },
            type: { type: DataTypes.STRING, allowNull: false },
            accountId: { type: DataTypes.INTEGER, allowNull: false },
        },
        {
            sequelize,
            modelName: "Transaction",
        }
    );
    return Transaction;
};
