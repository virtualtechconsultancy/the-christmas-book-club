const mongoDBConnection = require('mongoose');

const authorSchema = new mongoDBConnection.Schema({
	authorName: { type: String, required: true, minlength: 3, maxlength: 255 },
	authorBio: String,
	authorNationality: String,
	authorDOB: Date,
	authorDOD: Date,
});


const AuthorModel = mongoDBConnection.model('Author', authorSchema);

module.exports = AuthorModel;
