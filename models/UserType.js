const mongoose = require('mongoose');

//Laver schema for usertypes i DB
const UserTypeSchema = mongoose.Schema({
    userType: {
        type: Number,
        required: true,
        default: 1,
    }
});

module.exports = mongoose.model('UserTypeSchema', UserTypeSchema);