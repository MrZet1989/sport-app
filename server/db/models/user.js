const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Follower, { foreignKey: 'userId' });
      this.hasMany(models.Event, { foreignKey: 'userId' });
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    photoSrc: DataTypes.TEXT,
    name: DataTypes.STRING,
    about: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
