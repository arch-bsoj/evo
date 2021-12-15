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

router.get(
    '/',
    (req, res) => {
        res.render('error', {
            message: req.message
        });
    });
module.exports = router;