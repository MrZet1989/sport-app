const { Router } = require('express');
const authController = require('../controllers/auth.controller');
const checkAuth = require('../middlewares/checkAuth');
// /auth
const authRouter = Router();

authRouter.post('/signup', authController.signUp);//зарегился
authRouter.post('/signin', authController.signIn);//авторизовался
authRouter.get('/signout', authController.signOut);//выйти
authRouter.get('/check', checkAuth, authController.checkAuth);//проверка авторизирован пользователь или нет

module.exports = authRouter;
