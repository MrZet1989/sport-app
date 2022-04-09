require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const path = require('path');
const cookieParser = require('cookie-parser');

const place = require('./routers/place');
const event = require('./routers/event');
const user = require('./routers/user');

const app = express();

const PORT = process.env.PORT || 3002;// 4000;
// process.env.PORT ?? 3002
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

app.get('/', (req, res, next) => {
  res.json({ message: 'ok' });
  next();
});

app.use('/places', place);
app.use('/events', event);
app.use('/users', user);

app.listen(PORT, () => {
  console.log('B PA6OTE');
});
