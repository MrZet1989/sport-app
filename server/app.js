require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const place = require('./routers/place');

const app = express();

const PORT = 4000; // 4000
// process.env.PORT ?? 3002
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.use('/', place);

app.listen(PORT, () => {
  console.log('B PA6OTE');
});
