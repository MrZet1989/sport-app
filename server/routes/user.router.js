const express = require('express');
const sha256 = require('sha256');
const upload = require('../middlewares/multerMiddlewares');

const router = express.Router();

const { User } = require('../db/models');

router.post('/registration', async (req, res) => {
  try {
    const userOne = await User.findOne({ where: { email: req.body.email } });
    if (userOne) {
      res.sendStatus(234);
    } else {
      const newUser = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: sha256(req.body.password),
      });
      req.session.user = newUser.name;
      req.session.id = newUser.id;
      const { id, name } = newUser;
      res.status(200).json({ id, name });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/authentification', async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
      if (user.password === sha256(req.body.password)) {
        req.session.user = user.name;
        req.session.userId = user.id;
        res.sendStatus(200);
      } else {
        res.sendStatus(233);
      }
    } else {
      res.sendStatus(234);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put('/:id',upload.single('file'), async (req,res)=>{
  console.log(req.file, req.body);
  try {
    const { name, email, about } = req.body;
    if(req.file){
      const editUser = await User.update({name, email, about, photoSrc: req.file.originalname },{ where: { id: req.params.id }});
      if(editUser){
        return res.sendStatus(200);
      }
    }
    else{
      const editUser = await User.update({name, email, about },{ where: { id: req.params.id }});
      if(editUser){
        return res.sendStatus(200);
      }
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
})

router.get('/:id', async(req,res)=>{
  try {
    const userOne = await User.findByPk(req.params.id);
    const user = {name: userOne.name, email: userOne.email, about: userOne.about, photo: userOne.photoSrc}
    res.json(user)
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
})
module.exports = router;
