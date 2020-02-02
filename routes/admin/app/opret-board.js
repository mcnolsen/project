const express = require('express');
const router = express.Router();
const Board = require('../../../models/Board');

router.post('/', async (req, res) => {
    try{
        const boardName = await req.body.name;
        const boardFound = await Board.findOne({'name': boardName});
        if (boardName === 0){
            req.flash('error', 'Indtast et board navn');
            res.redirect('/admin/opret-board');
        }
        else if (boardFound){
            req.flash('error', 'Der er allerede et board med det navn');
            res.redirect('/admin/opret-board');
        }
        else {
            const newBoard = new Board({
                name: req.body.name,
                beskrivelse: req.body.beskrivelse
            })
            newBoard.save();
            req.flash('success', 'Board oprettet');
            res.redirect('/admin/opret-board');
        }

    }
    catch (err){
        console.log(err);
    }
})

module.exports = router;