'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Game.belongsToMany(models.Profile, { through: 'Transaction' });
    }
  }
  Game.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    trailer: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};