const express = require('express');
const app = express();
const auth = require('../../config/auth');
const Board = require('../../models/Board');
const BookedBoard = require('../../models/BookedBoards');


//User routes
app.get('/user/arrangementer', auth.checkAuthentification, (req, res) => {
    res.render('./user/arrangementer.ejs', {userType: req.user.userType})
})
app.get('/user/book-board', auth.checkAuthentification, (req, res) => {
    const boardID = req.query.id;
    const date = req.query.date;

    const getTimes = async () =>{
        const chosenBoard = await Board.findById(boardID);
        const times = [];
        try{
            for(count=0; count < 23; count++){
                const foundTime = await BookedBoard.findOne({'bookedBoard': chosenBoard, 'bookedDate': date, 'bookedTime': count});
                if (foundTime){
                //Skal ikke pushe til arrayet med tider, hvis der er et match
                }
                else if (!foundTime){
                    times.push(count);
                }
            }
        }
        catch (err) {
            if (err) {
                console.log(err);
            }
        }
        return getRequest(times);
    }
    getTimes();
    //Finder alle boards
    const getRequest = (timeArray) =>{
        Board.find({}, (err, boards)=>{
            res.render('./user/book-board.ejs', {userType: req.user.userType, boards: boards, date: date, boardID: boardID, times: timeArray})
        })
    }
})
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
