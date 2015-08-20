var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	password: String,
	asteroid_high: {type: Number, default: 0},
	unicorn_high: {type: Number, default: 0},
	asteroid_alltime: {type: Number, default: 0},
	unicorn_alltime: {type: Number, default: 0},
	ateroid_scores: {type: Array, default: []},
	unicorn_scores: {type: Array, default: []},
	created_at: {type: Date, default: new Date},
	updated_at: {type: Date, default: new Date}
});

mongoose.model('Users', userSchema);
