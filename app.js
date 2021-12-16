// @imports Modules
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const exphbs = require('express-handlebars');
const MongoStore = require('connect-mongo');
const dotenv = require('dotenv');


// @config db
require('./config/db')
// @config passport
require('./config/passport')(passport)
// @config dotenv
dotenv.config({ path: './config/config.env'})


// @imports routes
const users = require('./routes/user');
const error = require('./routes/error');
const auth = require('./routes/auth');
const login = require('./routes/login');
const poll = require('./routes/poll');
const candidates = require('./routes/candidates');
const elections = require('./routes/elections');


// Express Middleware
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Handlebars
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');


// Session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI})
}))

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


app.use(cors());


// @routes ROUTES
app.use('/error', error)
app.use('/auth', auth)
app.use('/', users)
app.use('/', login)
app.use('/', poll)
app.use('/', candidates)
app.use('/', elections)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(` Server started on port ${port}`))