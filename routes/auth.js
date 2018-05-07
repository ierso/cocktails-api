import express from 'express';
import passport from 'passport';
const router = express.Router();

router.get('/google', passport.authenticate('google', 
    {scope: ['profile', 'email']}
));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
});

export default router;