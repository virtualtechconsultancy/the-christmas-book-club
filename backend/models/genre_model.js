const mongoDBConnection = require('mongoose');
const Joi = require('joi');

const GenreModel = mongoDBConnection.model(
	'Genre',
	new mongoDBConnection.Schema({
		genreName: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 255,
			lowercase: true,
			trim: true,
		},
	})
);

function validateGenreName(name) {
	const schema = Joi.object({
		genreName: Joi.string().min(3).required(),
	});

	return schema.validate({ genreName: name });
}

exports.GenreModel = GenreModel;
exports.validate = validateGenreName;
