module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [{
      title: 'Футбол',
      about: 'Играем в футбол',
      placeId: 1,
      sportId: 1,
      userId: 1,
      startTime: '2022-04-13T16:32:58.306Z',
      endTime: '2022-04-13T19:32:58.306Z',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Workout',
      about: 'Будем играть в лесенку на брусьях и турниках',
      placeId: 1,
      sportId: 5,
      userId: 1,
      startTime: '2022-04-13T11:32:58.306Z',
      endTime: '2022-04-22 13:00:25.262+03',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Бег',
      about: 'Бегаем 100 метровку на время',
      placeId: 3,
      sportId: 4,
      userId: 2,
      startTime: '2022-04-13T18:32:58.306Z',
      endTime: '2022-04-13T20:32:58.306Z',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Баскетбол',
      about: 'играем 3 на 3, есть мяч! воды мало, как в пустыне',
      placeId: 3,
      sportId: 2,
      userId: 2,
      startTime: '2022-04-13T14:00:00.306Z',
      endTime:  '2022-04-13T16:00:00.306Z',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Волейбол',
      about: 'команды смешанные, поэтому ждем всех',
      placeId: 1,
      sportId: 3,
      userId: 1,
      startTime: '2022-04-13T12:02:58.306Z',
      endTime: '2022-04-13T13:14:58.306Z',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Скандинавская хотьба',
      about: 'ждем всех желающих',
      placeId: 1,
      sportId: 4,
      userId: 3,
      startTime: '2022-04-13T10:11:58.306Z',
      endTime: '2022-04-13T12:32:58.306Z',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Кроссфитем',
      about: 'треня по кроссфиту, жду единомышленников, работаем с собственным весом',
      placeId: 5,
      sportId: 5,
      userId: 3,
      startTime: '2022-04-13T19:20:58.306Z',
      endTime: '2022-04-13T20:32:58.306Z',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  },
};
