const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true

    },
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4
    },
    password: {
        type: String,
        minLength: 2,
        required: false
    }

},
{
    timestamps: true
});

const User = mongoose.model('users', userSchema);
module.exports = User;