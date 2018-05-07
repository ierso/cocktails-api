import passport from 'passport';
import passportLocal from 'passport-local';
import bcrypt from 'bcryptjs';

import User from '../models/user';

const LocalStrategy = passportLocal.Strategy;

module.exports = function (passport) {
    passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
        // match user
        User.findOne({
            email: email,
        }).then(user => {
            if (!user) {
                return done(null, false, {
                    message: 'no user found'
                })
            }
            // match pw
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {
                        message: 'password incorrect'
                    }) 
                }
            })

        })
    }))
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}