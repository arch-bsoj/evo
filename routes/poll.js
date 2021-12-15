const express = require('express');
const Pusher = require('pusher');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote');

const pusher = new Pusher({
    appId: "1297321",
    key: "c9597f156f086688c6d0",
    secret: "d3773249e35521e2b02f",
    cluster: "ap1",
    useTLS: true
  });

router.get('/poll', (req, res) => {
    Vote.find().then(votes => res.json({
        success: true,
        votes: votes
    }));
});

router.get('/poll/:electionId', (req, res) => {
    Vote.find({election_id: req.params.electionId}).then(votes => res.json({
        success: true,
        votes: votes
    }));
});

router.post('/poll', (req, res) => {
    const newVote = {
        points: 1,
        voterId: req.body.voter,
        name: req.body.name,
        election_id:req.body.election_id, 
    };
    new Vote(newVote).save().then(vote => {
        pusher.trigger('add-vote', 'votes', {
            points: parseInt(vote.points),
            voterId: vote.voterId,
            name: vote.name,
            election_id: vote.election_id, 
        });
        return res.json({success: true, message: 'Thank you for voting'});
    })
});

module.exports = router;