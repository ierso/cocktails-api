import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import config from './config/main';
const { databaseUrl, port } = config;

const app = express();

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(databaseUrl)
    .then(() => console.log('mongoDb connected'))
    .catch(((err) => console.log(err)))

mongoose.Promise = global.Promise

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

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
app.get('/', ( req, res ) => {
    res.send('index');
})
