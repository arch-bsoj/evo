const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    election_id:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    }
});

CandidateSchema.virtual('url')
    .get(() => {
        return '/candidates/candidate' + this.id;
    })
const Candidate = mongoose.model('Candidate', CandidateSchema);

module.exports = Candidate;