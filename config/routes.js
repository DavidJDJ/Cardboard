var User = require('./../server/controllers/users.js');

module.exports = function(app){
	app.post('/user/add', function(req, res){
		console.log('survived to the routes', req.body);
		User.add(req, res);
	})
	app.post('/user/login', function(req, res){
		console.log('made it to routes', req.body);
		User.logIn(req, res);
	})
}
