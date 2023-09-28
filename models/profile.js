'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
      Profile.belongsToMany(models.Game, { through: 'Transaction' });
    }
  }
  Profile.init({
    nickname: DataTypes.STRING,
    picture: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};