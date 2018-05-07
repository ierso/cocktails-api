import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import config from './config/main';
const { databaseUrl, port } = config;

const app = express();

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

app.get('/', ( req, res ) => {
    res.send('index');
})

// passport

import configPassport from './config/passport';
configPassport(passport)

// load routes
import auth from './routes/auth';
import ideas from './routes/ideas';
import users from './routes/users';
// use routes
app.use('/auth', auth);
app.use('/ideas', ideas);
app.use('/users', users);
