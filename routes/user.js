const express = require('express');
const Pusher = require('pusher');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User');

const pusher = new Pusher({
    appId: "1297321",
    key: "c9597f156f086688c6d0",
    secret: "d3773249e35521e2b02f",
    cluster: "ap1",
    useTLS: true
  });


router.get('/users_list', (req, res) => {
    res.render('users', {
        name: req.user.name,
        avatar: req.user.image
    });
});


router.get('/users', (req, res) => {
    User.find().then(users => res.json({
        success: true,
        users: users
    }));
});

router.get('/users/:userId', (req, res) => {
    User.findOne({userId: req.params.userId}).then(user => res.json({
        success: true,
        user: user
    }));
});

router.post('/add/user', (req, res) => {
    const newUser = {
        userId: req.body.userId,
        name: req.body.name,
        image: req.body.image 
    };
    new User(newUser).save().then(user => {
        pusher.trigger('users', 'add_user', {
            userId: user.userId,
            name: user.name,
            image: user.image,
        });
        return res.json({success: true, message: 'User has been successfully added.'});
    })
});

module.exports = router;