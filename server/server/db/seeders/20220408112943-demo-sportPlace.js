module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SportPlaces', [{
      placeId: 1,
      sportId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 1,
      sportId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 1,
      sportId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 1,
      sportId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 2,
      sportId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 3,
      sportId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 3,
      sportId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 3,
      sportId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 3,
      sportId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 3,
      sportId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 3,
      sportId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 4,
      sportId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 4,
      sportId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 4,
      sportId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 4,
      sportId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      placeId: 5,
      sportId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SportPlaces', null, {});
  },
};
