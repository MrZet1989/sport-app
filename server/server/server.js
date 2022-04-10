const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
// const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

// const PORT = process.env.PORT || 3007;
const PORT = 4042;
const app = express();

const pathRoot = require('path').join(__dirname, 'client', 'build');
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
// app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.static(path.join(__dirname, 'build')));
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
app.use('/index', indexRouter);
app.use('/user', user);
app.use('/places', place);
app.use('/events', event);

// app.use(express.static(pathRoot));
// app.get('/*', (req, res) => {
//   res.sendFile('index.html', { root: pathRoot });
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/index.html`));
// });

app.get('/*', (req, res) => {
  // res.sendFile(path.join((__dirname, 'build', 'index.html')));
  res.sendFile('./build/index.html', { root: __dirname });
});

// check
app.listen(PORT, () => {
  console.log('Port is ok');
});
