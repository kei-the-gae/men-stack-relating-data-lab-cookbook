const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find();
        res.render('users/index.ejs', {
            users: allUsers,
        });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    };
});

router.get('/:userId', async (req, res) => {
    try {
        const targetUser = await User.findById(req.params.userId);
        console.log(targetUser);
        res.render('users/show.ejs', {
            username: targetUser.username,
            foods: targetUser.pantry,
        });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    };
});

module.exports = router;