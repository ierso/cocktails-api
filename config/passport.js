import passportGoogleAuth from 'passport-google-oauth20';
import mongoose from 'mongoose';
import config from './main';
import User from '../models/user';

const { googleClientID, googleClientSecret } = config;
const GoogleStrategy = passportGoogleAuth.Strategy;

export default function (passport) {
    passport.use(
        new GoogleStrategy({
            clientID: googleClientID,
            clientSecret: googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        }, (accessToken, refreshToken, profile, done) => {
            const newUser = {
                googleID: profile.id,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails[0].value
            }
            User.findOne({
                googleID: profile.id
            }).then(user => {
                if (user) {
                    done(null, user)
                } else {
                    new User(newUser).save()
                        .then(user => done(null, user))
                }
            })
        })
    );
    passport.serializeUser((user, done) => {
        done(null, user.id)
    });
    passport.deserializeUser((id, done) => {
        User.findById(id).then(user => done(null, user));
    });
}