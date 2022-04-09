const express = require('express');

const { Place } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const places = await Place.findAll();
  return res.json(places);
});
module.exports = router;
