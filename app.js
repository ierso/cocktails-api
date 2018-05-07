import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import config from './config/main';
const { databaseUrl, port } = config;

const app = express();

import { googleClientID, googleClientSecret } from './config/main';
console.log(googleClientID, googleClientSecret)

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






import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';

//! remove later
import exphbs from 'express-handlebars';










app.use(cookieParser());
// session middleware
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
    res.locals.user = req.user || null;
    next();
});


// connect to mongoose
mongoose.connect(databaseUrl)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));



// setup middleware for handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//setup middleware for parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

