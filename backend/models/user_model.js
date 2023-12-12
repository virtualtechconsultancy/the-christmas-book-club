const Joi = require('joi');
const mongoDBConnection = require('mongoose');

const userSchema = new mongoDBConnection.Schema({
	userUsername: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50,
	},
	userEmail: {
		type: String,
		minlength: 5,
		maxlength: 128,
		required: true,
		match: /.+\@.+\..+/,
		unique: true,
	},
	userIsAdmin: {
		type: Boolean,
		default: false,
	},
});

function validateUser(user) {
	const schema = Joi.object({
		userUsername: Joi.string().min(5).max(50).required(),
		userEmail: Joi.string().min(5).max(128).required(),
		userIsAdmin: Joi.boolean(),
	});

	return schema.validate({
		userUsername: user.userUsername,
		userEmail: user.userEmail,
		userIsAdmin: user.userIsAdmin,
	});
}

const UserModel = mongoDBConnection.model('User', userSchema);
module.exports = UserModel;
