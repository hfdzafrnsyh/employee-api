const mongoose = require('mongoose');
require('../database/db');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String
    },
    photo: {
        type: String
    }
},
    {
        timestamps: true
    }
)

const User = new mongoose.model('Users', UserSchema);
module.exports = User;