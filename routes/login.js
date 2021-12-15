const express = require('express');
const Pusher = require('pusher');
const path = require('path')
const router = express.Router();
const mongoose = require('mongoose');
const {ensureAuth, ensureGuest} = require('../middleware/auth');

const User = require('../models/User');

const pusher = new Pusher({
    appId: "1297321",
    key: "c9597f156f086688c6d0",
    secret: "d3773249e35521e2b02f",
    cluster: "ap1",
    useTLS: true
  });


router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login',
  })
});

router.get('/dashboard', ensureAuth, (req, res) => {
  res.render('dashboard', {
    name: req.user.name,
    avatar: req.user.image
  })
});

module.exports = router;