const mongoDBConnection = require('mongoose');

const ReviewModel = mongoDBConnection.model(
	'Review',
	new mongoDBConnection.Schema({
		reviewRating: {
			type: Number,
			min: 1,
			max: 5,
		},
		reviewText: {
			type: String,
			max: 5120,
		},
		reviewUser: {
			type: mongoDBConnection.Schema.Types.ObjectId,
			ref: 'User',
		},
		reviewBook: {
			type: mongoDBConnection.Schema.Types.ObjectId,
			ref: 'Book',
		},
	})
);

module.exports = ReviewModel;
