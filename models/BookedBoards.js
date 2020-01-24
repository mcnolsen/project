const mongoose = require('mongoose');

//Laver schema for BookedBoards i DB
const BookedBoardSchema = mongoose.Schema({
    bookedBoard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
    },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },
    creationDate: {
        type: Date,
        default: Date.now,
    },
    bookedDate: {
        type: Date,
        required: true
    },
    bookedTime: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('BookedBoard', BookedBoardSchema);