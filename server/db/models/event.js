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
    }
  }
  Event.init({
    title: DataTypes.STRING,
    about: DataTypes.TEXT,
    placeId: DataTypes.INTEGER,
    sportId: DataTypes.INTEGER,
    userId: DataTypes.DATA,
    startTime: DataTypes.DATA,
    endTime: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
