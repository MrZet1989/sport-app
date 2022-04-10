const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SportPlace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Place, { foreignKey: 'placeId' });
      this.belongsTo(models.Sport, { foreignKey: 'sportId' });
    }
  }
  SportPlace.init({
    placeId: DataTypes.INTEGER,
    sportId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'SportPlace',
  });
  return SportPlace;
};
