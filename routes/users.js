const express = require('express');
const router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');

//User routes
router.get('/', (req, res) => {
    res.send(console.log('Hello There'));
})

router.post('/', (req, res) => {
    var user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    //Gemmer user
    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    })

});

module.exports = router;