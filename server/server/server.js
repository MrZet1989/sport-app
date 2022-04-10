const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
// const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

// const PORT = process.env.PORT || 3007;
const PORT = 4001;
const app = express();

const indexRouter = require('./routes/index');
const place = require('./routes/place');
const event = require('./routes/event');
const user = require('./routes/user');

app.use(cors(
  {
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
  },
));

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: { secure: false },
  name: 'auth',
}));
// check
app.get('/test', (req, res) => {
  res.json({ message: 'ok' });
});
app.use('/', indexRouter);
app.use('/user', user);
app.use('/places', place);
app.use('/events', event);
// check
app.listen(PORT, () => {
  console.log('Port is ok');
});
