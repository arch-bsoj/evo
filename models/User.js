const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true
    },
    status:{
        type: String,
    },
    userLevel:{
        type:String,
        default: 'voter'
    },
    college:{
        type: String,
        default: 'any',
    },
    department:{
        type: String,
        default: 'any',
    },
    course:{
        type: String,
        default: 'any',
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;