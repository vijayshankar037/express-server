//Importing the express module in.
const express = require('express');

const mongoose = require('mongoose');

//Load cookies session module
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

//Importing the model
require('./models/User');
//importing the file in side the code.
require('./services/passport');

//Connecting to MongoDB uri
mongoose.connect(keys.mongoURI);

//Created the app constant for express application which handles the HTTP request.
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

// const app            = express();
// app.use('/auth', require('./routes/authRoutes'));

//Pass the app constant to authRoutes which handles the routes.

require('./routes/authRoutes')(app);
//defining the prot constant for express application.
PORT = process.env.PORT || 5000;

app.listen(PORT);
