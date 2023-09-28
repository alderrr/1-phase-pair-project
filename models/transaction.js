'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Profile)
      Transaction.belongsTo(models.Game)
    }
  }
  Transaction.init({
    ProfileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Profiles",
        key: "id"
      }
    },
    GameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Games",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};