const express = require('express');
//
const passport = require('passport');
const GoogleStratergy = require('passport-google-oauth20').Strategy

const app = express();

//Creating the / path
// app.get("/",(req,res) =>{
// 	res.send({hi:"hello.."})
// });

passport.use(new GoogleStratergy());

//defining the prot constant for express application.
PORT = process.env.PORT || 5000;

app.listen(PORT);
