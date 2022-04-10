const express = require('express');
const sha256 = require('sha256');

const router = express.Router();

const { User } = require('../db/models');

router.post('/registration', async(req,res) => {
    try {
       const userOne = await User.findOne({ where: { email:req.body.email }});
       if(userOne){
           res.sendStatus(234);
       }else{
           const newUser = await User.create({ email:req.body.email, name:req.body.name, password:sha256(req.body.password)});
           req.session.user = newUser.name;
           req.session.id = newUser.id;
           const { id, name } = newUser;
           res.status(200).json({ id, name });
       }
    } catch (error) {
        console.log(error);
      res.sendStatus(500)  
    }
})

router.post('/authentification', async (req,res) => {
    try {
        const user = await User.findOne({where:{email:req.body.email}})
        if(user){
            if(user.password === sha256(req.body.password)){
                req.session.user = user.name;
                req.session.userId = user.id;
                res.sendStatus(200);
            }else{
                res.sendStatus(233)
            }
        }else{
           res.sendStatus(234)
        }
    } catch (error) {
        
    }
})
module.exports = router;