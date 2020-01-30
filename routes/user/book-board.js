const express = require('express');
const router = express.Router();
const Board = require('../../models/Board');
const BookedBoard = require('../../models/BookedBoards');

router.post('/', async (req, res) => {
    try{

        const user = req.user;
        const bookedDate = req.body.date;
        const bookedTime = req.body.time;
        const boardID = req.body.id;
        const board = await Board.findById(boardID);
        const bookedTimeInt = parseInt(bookedTime);
 
        console.log(board);
        //Tjekker board ID
        if(!boardID){
            req.flash('error', 'Det board har intet ID');
            res.redirect('/user/book-board');
        }
        //Tjekker om der alligevel er booked en tid med samme board på samme dato og tid
        else if(await BookedBoard.findOne({'bookedBoard': board, 'bookedDate': bookedDate, 'bookedTime': bookedTime})){
            req.flash('error', 'Der er allerede end der har booket det board på samme tidspunkt og dato');
            res.redirect('/user/book-board');
        }
        else {
            const booking = new BookedBoard({
                bookedBoard: board,
                bookedBy: user,
                bookedDate: bookedDate,
                bookedTime: bookedTime
            })
            booking.save();
            req.flash('success', `Dit board er nu booked d. ${bookedDate} klokken ${bookedTime}.00 til klokken ${bookedTimeInt+1}.00`);
            res.redirect('/user/book-board');
        }
    }
    catch (err){
        console.log(err);
    }
})

module.exports = router;