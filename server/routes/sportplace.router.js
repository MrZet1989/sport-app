const express = require('express');
const { SportPlace } = require('../db/models');
// /sportplaces

const router = express.Router();

router.get('/', async (req, res) => {
  const sportplaces = await SportPlace.findAll();
  return res.json(sportplaces);
});
module.exports = router;
