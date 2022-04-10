module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      email: 'firt@mail.ru',
      password: '12345',
      photoSrc: 'https://sun1-91.userapi.com/s/v1/if1/BJ_cRWpTKrHOCe23CcauwdrEqNoz_EBY010JfBQL8QkhywF2xdy49Kl6ZKglWI940YyrVJwY.jpg?size=200x200&quality=96&crop=156,0,538,538&ava=1',
      name: 'Борис Бритва',
      about: 'Кто не курит и не пьет, ровно дышит, сильно бъет',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'aladin@mail.ru',
      password: '123',
      photoSrc: 'https://www.kinonews.ru/insimgs/newsimg/newsimg20840.jpg',
      name: 'Аладин',
      about: 'В Багдаде все спокойно!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'cigan@mail.ru',
      password: '11111',
      photoSrc: 'https://odnaminyta.com/wp-content/uploads/2020/08/blobid1596429902419.jpg',
      name: 'Яшка-Цыган',
      about: 'Есть пули в нагане, и надо успеть,Сразиться с врагами и песню допеть.И нет нам покоя! Гори, но живи!',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
