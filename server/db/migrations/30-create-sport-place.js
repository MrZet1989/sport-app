module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SportPlaces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      placeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Places',
          key: 'id',
        },
      },
      sportId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sports',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SportPlaces');
  },
};
