const mongoose = require('mongoose');

//Laver schema for users i DB
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
    type: String,
    required: true
},
    password: {
        type: String,
        required: true
    },
    creationData: {
        type: Date,
        default: Date.now,
    },
    userType: {
        type: String,
        default: "user"
    }
});

module.exports = mongoose.model('User', UserSchema);