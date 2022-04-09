const express = require('express');

const { User } = require('../db/models');

const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
});
module.exports = router;
