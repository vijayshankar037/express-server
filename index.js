const express = require('express');
const app = express();

//Creating the / path
app.get("/",(req,res) =>{
	res.send({hi:"hello.."})
});

//defining the prot constant for express application.
PORT = process.env.PORT || 5000;

app.listen(PORT);
