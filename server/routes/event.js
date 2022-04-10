const express = require('express');

const { Event } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const events = await Event.findAll();
  return res.json(events);
});

router// создание событий
  .route('/addevent')
  .get((req, res) => {
    res.json();
  })
  .post(async (req, res) => {
    const {
      title, about,
      placeId, sportId,
      startTime,
      endTime,
    } = req.body;
    const userId = req.session.user;
    if (!title || !about || !placeId || !sportId || !userId || !startTime || !endTime) {
      return res.json({ message: 'Заполните все поля' });
    }
    const newEvent = await Event.create({
      title,
      about,
      placeId,
      sportId,
      userId,
      startTime,
      endTime,
    }).catch((e) => e);
    if (newEvent instanceof Error) {
      return res.json({
        message: 'Такое событие уже существует',
      });
    }
    return res.redirect('/');
  });
module.exports = router;
