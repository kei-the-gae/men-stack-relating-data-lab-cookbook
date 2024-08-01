const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render('foods/index.ejs', {
            foods: currentUser.pantry,
        });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    };
});

router.get('/new', async (req, res) => {
    res.render('foods/new.ejs');
});

router.post('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.pantry.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/foods`);
    } catch (err) {
        console.log(err);
        res.redirect('/');
    };
});

module.exports = router;