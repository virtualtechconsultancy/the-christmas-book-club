const Joi = require('joi');
const mongoDBConnection = require('mongoose');

const bookSchema = new mongoDBConnection.Schema({
  bookTitle: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 128,
  },
  bookAuthor: {
    type: mongoDBConnection.Schema.Types.ObjectId,
    ref: 'Author',
  },
  bookISBN: {
    type: String,
    required: true,
    minlength: 13,
    maxlength: 13,
  },
  bookSynopsis: {
    type: String,
    maxlength: 2048,
  },
  bookGenre: {
    type: mongoDBConnection.Schema.Types.ObjectId,
    ref: 'Genre',
  },
  bookLanguage: {
    type: String,
    maxlength: 32,
  },
  bookPublishedDate: {
    type: Date,
  },
  bookIsFeatured: {
    type: Boolean,
  },
  bookImage: {
    type: String,
    default: '', 
  },
});

const BookModel = mongoDBConnection.model('Book', bookSchema);

module.exports = BookModel;
