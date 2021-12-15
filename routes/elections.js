const express = require('express');
const Pusher = require('pusher');
const router = express.Router();
const mongoose = require('mongoose');

const Election = require('../models/Election');


const pusher = new Pusher({
    appId: "1297321",
    key: "c9597f156f086688c6d0",
    secret: "d3773249e35521e2b02f",
    cluster: "ap1",
    useTLS: true
  });

router.get('/elections', (req, res) => {
    Election.find()
        .then(elections => res.json({
            success: true,
            elections: elections
        }))
});

router.get('/elections/&id=:electionId', (req, res) => {
    const election = Election.findOne({election_id: req.params.electionId}, (err, docs) => {
        if (err) console.log(err);
        else {
            res.render('candidates', {
                name: req.user.name,
                avatar: req.user.image,
                title: docs.title,
                election_id: docs.election_id,
            });
        }
    });
});

router.get('/elections_list', (req, res) => {
    res.render('elections', {
        name: req.user.name,
        avatar: req.user.image
    });
});

router.post('/elections', (req, res) => {
    const election = {
        id: req.body.title,
        name: req.body.name,
        college: req.body.college,
        department: req.body.department,
        course: req.body.course,
    };
    new Election(election).save().then(() => {
        pusher.trigger('evopoll', 'election', {
            election_id: election.id,
            title: election.name,
            total_vote: "0",
            college: election.college,
            department: election.department,
            course: election.course,
        });
        return res.json({success: true, message: 'Election poll have been successfully added.'});
    })
});

module.exports = router;