const { Router } = require('express');
const eventController = require('../controllers/event.controller');
const checkAuth = require('../middlewares/checkAuth')
const checkAuthor = require('../middlewares/checkAuthor');
// /events
const eventRouter = Router();

eventRouter.get('/', eventController.getAllEvent);
eventRouter.post('/newevent', eventController.newEvent);//добавление события
eventRouter.get('/about/:id', eventController.getAboutEvent);
eventRouter.route('/:id')//айди события поидее если не будет работать то  поменять на userId
  .patch(checkAuth, checkAuthor, eventController.editEvent)
  .get(checkAuth, eventController.getEvent);

module.exports = eventRouter;
 