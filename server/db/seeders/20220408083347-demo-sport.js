module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sports', [{
      title: 'Футбол',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Баскетбол',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Волейбол',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Бег',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Workout',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sports', null, {});
  },
};
