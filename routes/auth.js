const express = require('express');
const Pusher = require('pusher');
const router = express.Router();
const mongoose = require('mongoose');


const User = require('../models/User');
const passport = require('passport');

const pusher = new Pusher({
    appId: "1297321",
    key: "c9597f156f086688c6d0",
    secret: "d3773249e35521e2b02f",
    cluster: "ap1",
    useTLS: true
  });


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/google/callback',
    passport.authenticate('google',{ failureRedirect: '/error' }),
    (req, res) => {
        res.redirect('/dashboard');
    });

router.get(
    '/logout',
    (req, res) => {
        req.logout();
        res.redirect('/');
    });
module.exports = router;