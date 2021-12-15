const express = require('express');
const Pusher = require('pusher');
const router = express.Router();
const mongoose = require('mongoose');

const Candidate = require('../models/Candidate');


const pusher = new Pusher({
    appId: "1297321",
    key: "c9597f156f086688c6d0",
    secret: "d3773249e35521e2b02f",
    cluster: "ap1",
    useTLS: true
  });

router.get('/candidates', (req, res) => {
    Candidate.find().then(candidates => res.json({
        success: true,
        candidates: candidates
    }));
});

router.get('/candidates/:electionId', (req, res) => {
    Candidate.find({election_id: req.params.electionId})
        .then(candidates => res.json({
            success: true,
            candidates: candidates
        }));
});

router.post('/candidates', (req, res) => {
    const candidate = {
        id: Math.random() * 1000,
        name: req.body.name,
        position: req.body.position,
        election_id: req.body.election_id,
    };
    new Candidate(candidate).save().then(vote => {
        pusher.trigger('add_candidate', 'candidates', {
            id: candidate.id,
            name: candidate.name,
            position: candidate.position,
            election_id: candidate.election_id
        });
        return res.json({success: true, message: 'Candidate have been successfully added to the poll.'});
    })
});

module.exports = router;