const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Sport, { foreignKey: 'sportId' });
      this.belongsTo(models.Place, { foreignKey: 'placeId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Event.init({
    title: DataTypes.STRING,
    about: DataTypes.TEXT,
    placeId: DataTypes.INTEGER,
    sportId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
