const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStratergy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) =>{
    done(null, user.id);
})

passport.deserializeUser((id, done)=>{
    User.findById(id).then(user => {
        done(null, user);
    })
})

passport.use(
    new GoogleStratergy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log("profile :", profile)
        User.findOne({googleId: profile.id}).then((existingUser)=>{
            debugger
            if (existingUser) {
                console.log("returning User...")
            } else {
                new User({
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    name: profile.displayName,
                    gender: profile.gender,
                    provider: profile.provider
                }).save()
                .then(user=>done(null, user))
            }
        })
    }
));
