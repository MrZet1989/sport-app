module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Places', [{
      coordinates: '55.747716, 37.859493',
      title: 'Стадион МАОУ Лицей г.Реутов',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      coordinates: '55.746133, 37.860793',
      title: 'Спорт площадка во дворе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      coordinates: '55.747877, 37.867986',
      title: 'Стадион МБОУ Средняя общеобразовательная школа № 5',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      coordinates: '55.750777, 37.865845',
      title: 'Центральный парк г.Реутов',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      coordinates: '55.747753, 37.857454',
      title: 'Спорт площадка во дворе',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Places', null, {});
  },
};
