const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render('foods/index.ejs', {
            foods: currentUser.foods,
        });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    };
});

router.get('/new', async (req, res) => {
    res.render('foods/new.ejs');
});

module.exports = router;