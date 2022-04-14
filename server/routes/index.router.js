const { Follower } = require("../db/models");

const express = require('express');
// /index
const router = express.Router();

router.get('/', (req, res) => res.redirect('/'));

router.post('/newfollower', (req, res) => {
  const {eventId, userId} = req.body;
  const follow = Follower.create({ userId, eventId })
  res.send('ок')
})

module.exports = router;
