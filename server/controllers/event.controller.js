const { Event, Follower, User, Sport, Place } = require("../db/models");
const follower = require("../db/models/follower");

const newEvent = async (req, res) => {
  const { title, about, placeId, sportId, startTime, endTime, userId } =
    req.body;
  const newEvent = Event.create({
    title,
    about,
    placeId,
    sportId,
    startTime,
    endTime,
    userId,
  });
  res.send("ok");
};

const editEvent = async (req, res) => {
  //редактировать событие
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

const getEvent = async (req, res) => {
  //получить событие
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

const getAllEvent = async (req, res) => {
  //получить все события
  try {
    const allEvent = await Event.findAll();
    return res.json(allEvent);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const getAboutEvent = async (req, res) => {
  //получить инфу о событии, юзере кот создал и followers
  const { id } = req.params;
  try {
    let event = await Event.findByPk(id)
    let followers = await Follower.findAll(
      {
        include: [
          {
            model: Event,
            attributes: ['id' ],
            where: {
              id,
            },
          },
          {
            model: User,
            attributes: ['id', 'name', 'photoSrc'],
          },
        ],
      }
    );
    followers = followers.map(el => el.User)
    let creator = await User.findByPk(event.userId)
    let sport = await Sport.findByPk(event.sportId)
    let place = await Place.findByPk(event.placeId)
    event = {
      id: event.id,
      title: event.title,
      about: event.about,
      sport: sport.title,
      place: place.title,
      creator:{
        name: creator.name,
        photoSrc: creator.photoSrc,
        },
      followers,
    }
    res.json(event);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
};

module.exports = {
  newEvent,
  editEvent,
  getEvent,
  getAllEvent,
  getAboutEvent,
};
