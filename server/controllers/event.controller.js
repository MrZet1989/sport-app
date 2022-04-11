const { Event } = require('../db/models');

const editEvent = async (req, res) => {//редактировать событие
  let updatedFields = Object.entries(req.body).filter((el) => el[1]);
  if (updatedFields.length) {
    updatedFields = Object.fromEntries(updatedFields);
    try {
      // eslint-disable-next-line max-len
      const [, updatedEvent] = await Event.update(updatedFields, {
        where: { id: req.session.user.id },
        returning: true,
        plain: true,
        raw: true,
      });
      return res.json(updatedEvent);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(418);
};

const getEvent = async (req, res) => {//получить событие
  const { userId } = req.params;
  try {
    const currentEvent = await Event.findByPk(userId);
    setTimeout(() => {
      res.json(currentEvent);
    }, 2e3);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getAllEvent = async (req, res) => {//получить все события
  try {
    const allEvent = await Event.findAll();
    return res.json(allEvent);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  editEvent,
  getEvent,
  getAllEvent,
};
