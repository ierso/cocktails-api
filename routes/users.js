import express from 'express';
import bcrypt from 'bcryptjs';
import passport from 'passport';
const router = express.Router();

import User from '../models/user';

// user login route
router.get('/login', (req, res) => {
    res.render('users/login');
});

// user login POST
router.post('/login',
passport.authenticate('local'),
    function(req, res) {
    res.redirect('/ideas');
});

// user register
router.get('/register', (req, res) => {
    res.render('users/register');
});

// register form POST
router.post('/register', (req, res) => {
    let errors = [];

    if (req.body.password.length < 4) {
        errors.push({text: 'Password must be at least 4 characters'});
    }

    if (errors.length > 0) {
        res.render('users/register', {
            errors: errors,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
    } else {
        User.findOne({email: req.body.email})
            .then(user => {
                if (user) {
                    res.send({text: 'Email already exists'})
                    errors.push({text: 'Email already exists'});
                } else {
                    const newUser = new User ({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password
                    })
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser.save()
                                .then(user => {
                                    res.redirect('/users/login');
                                })
                                .catch(err => {
                                    console.log(err);
                                    return;
                                })
                        });
                    });
                }
            })
    }
});

//log out
router.get('/logout', (req, res) => {
    req.logout();
    res.send({
        text: 'You have logged out'
    })
})

export default router;