const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
// const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const PORT = 4042//process.env.PORT || 3007;
// const PORT = 4042;
const app = express();

// const pathRoot = require('path').join(__dirname, 'client', 'build');
const user = require('./routes/user.router');
const place = require('./routes/place.router');
const authRouter = require('./routes/auth.router')
const indexRouter = require('./routes/index.router');
const eventRouter = require('./routes/event.router');
const sportPlace = require('./routes/sportplace.router');
const sportRouter = require('./routes/sport.router')

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
  cookie: { 
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400, //кука живет 1 день
   },
  name: 'auth',
}));
// check
app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.use('/auth', authRouter);
app.use('/events', eventRouter);
app.use('/index', indexRouter);
app.use('/places', place);
app.use('/sports', sportRouter);
app.use('/sportplaces', sportPlace);
app.use('/user', user);

// app.use(express.static(pathRoot));
// app.get('/*', (req, res) => {
//   res.sendFile('index.html', { root: pathRoot });
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/index.html`));
// });

// app.get('/*', (req, res) => {
  // res.sendFile(path.join((__dirname, 'build', 'index.html')));
  //res.sendFile('./build/index.html', { root: __dirname });//для билда
// });

// check
app.listen(PORT, () => {
  console.log('Port is ok');
});
