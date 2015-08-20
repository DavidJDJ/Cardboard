var mongoose = require('mongoose');
var Users = mongoose.model('Users');

module.exports = (function(){
	return {
		add: function(req, res){
			Users.find({email: req.body.email}, function(err, user){
				if (err){
					console.log('error finding on db');
				} else {
					console.log('searched on db');
					// console.log(user);

					if (user[0]){
						console.log('not empty');
						res.json({error: true});
					} else {
						var user = new Users({first_name: req.body.first, last_name: req.body.last, email: req.body.email, password: req.body.password});
						user.save(function(err, added){
							if (err){
								console.log('error adding to db');
							} else {
								console.log('succesfully added user to db');
								console.log(added);
								res.json(added);
							}
						})
					}
				}
			})
		},
		logIn: function(req, res){
			console.log('on the controller', req.body);
			Users.findOne({email: req.body.email}, function(err, user){
				if(err){
					console.log('error getting users from db');
				} else {
					if (user.password != req.body.password){
						console.log('passwrds do not match');
						res.json({error: true});
					} else {
						res.json({user: user});
					}
				}
			})
		}
	}
})();
