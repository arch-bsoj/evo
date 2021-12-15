const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    voterId:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    points:{
        type: String,
        required: true
    },
    election_id:{
        type: String,
        required: true
    }
});

const Vote = mongoose.model('Vote', VoteSchema);

module.exports = Vote;