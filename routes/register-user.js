const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');

//Skal være async pga. bcrypt
router.post('/', async (req, res) => {
    try {
        const userEmail = await User.findOne({'email': req.body.email});
        const userUsername = await User.findOne({'username': req.body.username});
        //Laver forskellige user checks med databasen. Pga. middleware for flash smider den beskeden til res.locals.message.('det man vælger'), altså res.locals.message.error i det her tilfælde
        //Kan tilgås via messages.error i ejs, hvilket kan ses under views/register.ejs
            if(userEmail){
                req.flash('error', 'Email er allerede i brug');
                res.redirect('/register');
            }
            else if(userUsername) {
                req.flash('error', 'Username er allerede i brug');
                res.redirect('/register');
            }
            else if (req.body.password.length < 8) {
                req.flash('error', 'Venligst vælg et password på mindst 8 tegn');
                res.redirect('/register');
            }
            else if (req.body.password !== req.body.password2) {
                req.flash('error', 'De 2 indstastede passwords matcher ikke');
                res.redirect('/register');
            }
            else {
                const newUser = new User({
                        username: req.body.username,
                        email: req.body.email,
                        password: await bcrypt.hash(req.body.password, 10)
                })
                //Gemmer den nye user i databasen med object.save()
                    newUser.save();
                    res.redirect('/login');
                }
                
            }
            catch (error) {
                console.log(error);
        
            }
        })


module.exports = router;