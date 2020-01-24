const mongoose = require('mongoose');

//Laver schema for boards i DB
const BoardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    beskrivelse: {
        type: String,
        required: true
    },
    creationData: {
        type: Date,
        default: Date.now,
    },
    activated: {
        type: Boolean,
        default: true
    },
});

module.exports = mongoose.model('Board', BoardSchema);