const express = require('express');
// /index
const router = express.Router();

router.get('/', (req, res) => res.redirect('/'));

module.exports = router;
