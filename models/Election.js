const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ElectionSchema = new Schema({
    election_id:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    total_vote:{
        type: String,
        required: true
    },
    course:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    college:{
        type: String,
        required: true
    }  
});

const Election = mongoose.model('Election', ElectionSchema);

module.exports = Election;