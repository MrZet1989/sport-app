const express = require('express');
const { Place } = require('../db/models');
// /places
const router = express.Router();

router.get('/', async (req, res) => {
  const places = await Place.findAll();
  return res.json(places);
});
module.exports = router;
