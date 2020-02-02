const express = require('express');
const app = express();
const auth = require('../../config/auth');
const Board = require('../../models/Board');
const BookedBoards = require('../../models/BookedBoards');

app.get('/admin', auth.checkAdmin, (req, res) => {
    res.render('./admin/admin.ejs');
})

app.get('/admin/opret-board', auth.checkAdmin, (req, res) => {
    res.render('./admin/opret-board.ejs');
})

//Finder boards til get requesten
app.get('/admin/rediger-board', auth.checkAdmin, (req, res) => {
    Board.find({}, (err, boards)=>{
        res.render('./admin/rediger-board.ejs', {boards: boards});
    })
})

//Slet board post route, sammen med alle de bookninger der er med dette board
app.post('/admin/slet-board', auth.checkAdmin, async (req, res) => {
    const board = await Board.findOne({'_id': req.body.boardID});
    //Hvis boarded slettes, så skal alle bookninger med dette board også slettes
    const deleted = await BookedBoards.deleteMany({'bookedBoard': board}, (err)=>{
        if (err){
            console.log(err);
        }
    })
    const deletedBoard = await Board.deleteOne({'_id': req.body.boardID});
    req.flash('success', `Boarded er nu slettet og ${deleted.deletedCount} bookninger blev dermed også slettet`);
    res.redirect('./rediger-board');

});

app.post('/admin/rediger-beskrivelse', auth.checkAdmin, async (req, res) => {
    await Board.updateOne({'_id': req.body.boardIDBeskrivelse}, {'beskrivelse': req.body.beskrivelse});
    req.flash('success', `Boarded har nu fået denne beskrivelse: "${req.body.beskrivelse}"`);
    res.redirect('./rediger-board');
});

app.post('/admin/rediger-ledighed', auth.checkAdmin, async (req, res) => {
    await Board.updateOne({'_id': req.body.boardIDLedighed}, {'activated': req.body.aktivering});
    req.flash('success', `Boarded's ledigheds tilstand er nu: ${req.body.aktivering}`);
    res.redirect('./rediger-board');
})
module.exports = app;