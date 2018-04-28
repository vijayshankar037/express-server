const express = require('express');
//add the dependencies for google oauth
const passport = require('passport');
const GoogleStratergy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys');
const app = express();

//Creating the / path
// app.get("/",(req,res) =>{
// 	res.send({hi:"hello.."})
// });

passport.use(
	new GoogleStratergy(
	{
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log("Access Token:",accessToken);
        console.log("refresh Token:",refreshToken);
        console.log("profile:",profile);
        console.log("Done:",done);
    }
));

app.get(
	'/auth/google',
	passport.authenticate('google', {
    	scope: ['profile', 'email']
	}
));

app.get('/auth/google/callback',passport.authenticate('google'));
//defining the prot constant for express application.
PORT = process.env.PORT || 5000;

app.listen(PORT);
