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
    if (req.user) {
        res.send(req.user);
    } else {
        res.send(null);
    }
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

export default router;