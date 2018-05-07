import passportGoogleAuth from 'passport-google-oauth20';
import mongoose from 'mongoose';
import config from './main';

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
            console.log(accessToken);
            console.log(profile);
        })
    )
}