const passport = require('passport');
const GoogleStratergy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys');


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
