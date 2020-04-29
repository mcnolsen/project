const express = require('express');
const app = express();
const auth = require('../../config/auth');
const Board = require('../../models/Board');
const BookedBoard = require('../../models/BookedBoards');
const sorting = require('./app/sortFilter');
const User = require('../../models/User');
const bcrypt = require ('bcryptjs');


//User routes
app.get('/user/arrangementer', auth.checkAuthentification, (req, res) => {
    res.render('./user/arrangementer.ejs', {userType: req.user.userType})
})
app.get('/user/book-board', auth.checkAuthentification, async (req, res) => {

    const boardID = req.query.id;
    const date = req.query.date;
    const user = req.user;
    const timeArray = await sorting.getTimes(boardID, date);
    const filteredBookings = await sorting.getRequest(user);
        //Finder alle boards
        Board.find({}, (err, boards)=>{
            res.render('./user/book-board.ejs', {userType: req.user.userType, boards: boards, date: date, boardID: boardID, times: timeArray, mineBookninger: filteredBookings})
        })
    });
app.get('/user/kalender', auth.checkAuthentification, (req, res) => {
    res.render('./user/kalender.ejs', {userType: req.user.userType})
})
app.get('/user/logout', auth.checkAuthentification, (req, res) => {
    res.render('./user/logout.ejs')
})
app.get('/user/profil', auth.checkAuthentification, (req, res) => {
    res.render('./user/profil.ejs', {userType: req.user.userType, username: req.user.username, email: req.user.email})
})
app.get('/user/reglement', auth.checkAuthentification, (req, res) => {
    res.render('./user/reglement.ejs', {userType: req.user.userType})
})
app.get('/user/dashboard', auth.checkAuthentification, (req, res) => {
    res.render('./user/dashboard.ejs', {username: req.user.username, userType: req.user.userType});
})

//Skift password route
app.post('/user/changePassword', auth.checkAuthentification, async (req, res) => {
    const newPassword = req.body.newPassword;
    const newPasswordConfirm = req.body.newPasswordConfirm;
    //Forskellige password checks
    try {
        if (newPassword === ""){
            req.flash('error', 'Venligst indtast et password');
            res.redirect('./profil');
        }
        else if (newPassword !== newPasswordConfirm){
            req.flash('error', 'De 2 indtastede passwords matcher ikke');
            res.redirect('./profil');
        }
        else if (newPassword.length < 8){
            req.flash('error', 'Vælg venligst et password på over 8 tegn');
            res.redirect('./profil');
        }
        else {
            const newPasswordHash = await bcrypt.hash(newPassword, 10);
            await User.updateOne({'_id': req.user._id}, {'password': newPasswordHash});
            req.flash('success', 'Dit password er nu blevet skiftet');
            res.redirect('./profil');
        }
    } 
    catch (err) {
        console.log(err)
    }
})

module.exports = app;
