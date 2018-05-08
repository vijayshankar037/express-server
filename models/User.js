const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	email: String,
	name: String,
	gender: String,
	provider: String
	
});

mongoose.model('users', userSchema);
