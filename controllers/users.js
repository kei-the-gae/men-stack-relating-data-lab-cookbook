const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        res.send('this is the community page');
    } catch (err) {
        console.log(err);
        res.redirect('/');
    };
});

module.exports = router;