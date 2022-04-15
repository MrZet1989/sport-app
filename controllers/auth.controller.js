const sha256 = require('sha256');
const { User } = require('../db/models')
//в контроллере лежит вся логика ручек на регестрацию и авторизацию
const signUp = async (req, res) => { // регистрация
  const { email, name , password,  } = req.body;

  if (email  && name && password) {
    try {
      const newUser = await User.create({
        email,
        name,
        password: sha256(password),
      });

      req.session.user = {
        id: newUser.id,
        name: newUser.name,
      };

      return res.json({ id: newUser.id, name: newUser.name });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signIn = async (req, res) => {//авторизация
  const { password, email } = req.body;

  if (password && email) {
    try {
      const currentUser = await User.findOne({ where: { email } });
      if (currentUser && currentUser.password === sha256(password)) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
        };

        return res.json({ id: currentUser.id, name: currentUser.name });
      }
      return res.sendStatus(401);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signOut = async (req, res) => { //выход
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);

    res.clearCookie(req.app.get('cookieName'));

    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user.id);
    return res.json({ id: user.id, name: user.name });
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
};
