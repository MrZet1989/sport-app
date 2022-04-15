const express = require('express');
const { Sport } = require('../db/models');
// /sports

const router = express.Router();

router.get('/', async (req, res) => {
  const sports = await Sport.findAll();
  return res.json(sports);
});
module.exports = router;
