import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import config from './config/main';
import auth from './routes/auth';
import ideas from './routes/ideas';
import users from './routes/users';
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

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

mongoose.connect(databaseUrl)
    .then(() => console.log('mongoDb connected'))
    .catch(((err) => console.log(err)))

mongoose.Promise = global.Promise

// passport
import configPassport from './config/passport';
configPassport(passport)

// use routes
app.use('/auth', auth);
app.use('/ideas', ideas);
app.use('/users', users);

app.get('/', ( req, res ) => {
    res.send('index');
})

app.listen(port);