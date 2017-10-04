var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function(req, res) {
	if (!req.payload._id) {
		res.status(401).json({
			"message": "Unauthorizederror: private profile"
		});
	} else {
		User.findById(req.payload._id)
			.exec(function(err, user) {
				res.status(200).json(user);
			});
	}
}