const express = require('express');
const app = express();
const auth = require('../../config/auth');
const Board = require('../../models/Board');
const BookedBoard = require('../../models/BookedBoards');
const sorting = require('./sortFilter');


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
    res.render('./user/profil.ejs', {userType: req.user.userType})
})
app.get('/user/reglement', auth.checkAuthentification, (req, res) => {
    res.render('./user/reglement.ejs', {userType: req.user.userType})
})
app.get('/user/dashboard', auth.checkAuthentification, (req, res) => {
    res.render('./user/dashboard.ejs', {username: req.user.username, userType: req.user.userType});
})

module.exports = app;
