import express from 'express';
import passport from 'passport';
const router = express.Router();

router.get('/google', passport.authenticate('google', 
    {scope: ['profile', 'email']}
));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
});

router.get('/verify', (req, res) => {
    res.send(req.user);
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

export default router;