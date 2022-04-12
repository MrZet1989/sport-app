const { Router } = require('express');
const eventController = require('../controllers/event.controller');
const checkAuth = require('../middlewares/checkAuth')
const checkAuthor = require('../middlewares/checkAuthor');

const eventRouter = Router();

eventRouter.get('/', checkAuth, eventController.getAllEvent);
eventRouter.post('/newevent', eventController.addEvent);//добавление события
eventRouter.route('/:id')//айди события поидее если не будет работать то  поменять на userId
  .patch(checkAuth, checkAuthor, eventController.editEvent)
  .get(checkAuth, eventController.getEvent);

module.exports = eventRouter;
 