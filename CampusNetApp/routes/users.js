const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Course = require('../models/course');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        major: req.body.major,
        username: req.body.username,
        password: req.body.password,
        prevcourses: req.body.prevcourses,
        currentcourses: req.body.currentcourses,

    });

    User.getUserByUsername(newUser.username, (err, user) => {
        if (err) throw err;

        if (user) {
            return res.json({ success: false, msg: 'User not found' });
        } else {

            User.addUser(newUser, (err, user) => {
                if (err) {
                    res.json({ success: false, msg: 'Failed to register user' });
                } else {
                    /* console.log("-----------------------------------------"); */
                    res.json({ success: true, msg: 'User registered' });
                }
            });
        }
    });



});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        major: user.major,
                        prevcourses: user.prevcourses,
                        currentcourses: user.currentcourses
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong password' });
            }
        });
    });
});

router.get('/getUserById', (req, res, next) => {
    const id = req.query.id;
    console.log(id);
    User.getUserById(id, (err, user) => {

        if (err) {
            throw err;
        } else {
            return res.json(user);
        }
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});


module.exports = router;