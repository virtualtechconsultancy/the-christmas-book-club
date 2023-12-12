const express = require('express');
const router = express.Router();
const BookModel = require('../models/book_model');
const Joi = require('joi');

router.get('/', async (req, res) => {
  const books = await BookModel.find().populate('bookAuthor').populate('bookGenre');
  res.send(books);
});

router.get('/featuredBook', async (req, res) => {
  const featuredBook = await BookModel.find({ bookIsFeatured: true }).populate('bookAuthor').populate('bookGenre');
  if (!featuredBook) return res.status(404).send(`The featured book cannot be found.`);
  res.send(featuredBook);
});


router.get('/searchByAuthor/:id', async (req, res) => {
  const books = await BookModel.find({ bookAuthor: req.params.id }).populate('bookGenre');
  if (!books) return res.status(404).send(`The Book with the Author ID "${req.params.id}" cannot be found.`);
  res.json(books);
});


router.get('/:id', async (req, res) => {
  const book = await BookModel.findById(req.params.id).populate('bookAuthor').populate('bookGenre');
  if (!book) return res.status(404).send(`The Book with the ID "${req.params.id}" cannot be found.`);
  res.send([book]);
});

router.post('/', async (req, res) => {

  let book = new BookModel({
    bookTitle: req.body.bookTitle,
    bookAuthor: req.body.bookAuthor,
    bookISBN: req.body.bookISBN,
    bookSynopsis: req.body.bookSynopsis,
    bookGenre: req.body.bookGenre,
    bookLanguage: req.body.bookLanguage,
    bookPublishedDate: req.body.bookPublishedDate,
    bookIsFeatured: req.body.bookIsFeatured,
    bookImage: req.body.bookImage,
  });

  book = await book.save();
  res.send(book);
});


router.put('/:id', async (req, res) => {
  const { error } = validateBook(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const book = await BookModel.findByIdAndUpdate(
    req.params.id,
    {
      bookTitle: req.body.bookTitle,
      bookAuthor: req.body.bookAuthor,
      bookISBN: req.body.bookISBN,
      bookSynopsis: req.body.bookSynopsis,
      bookGenre: req.body.bookGenre,
      bookLanguage: req.body.bookLanguage,
      bookPublishedDate: req.body.bookPublishedDate,
      bookIsFeatured: req.body.bookIsFeatured,
      bookImage: req.body.bookImage,
    },
    { new: true }
  );

  if (!book) return res.status(404).send(`The book with the ID "${req.params.id}" cannot be found.`);
  res.send(book);
});


router.delete('/:id', async (req, res) => {
  const book = await BookModel.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).send(`The book with the ID "${req.params.id}" cannot be found.`);
  res.send(book);
});

function validateBook(book) {
  const schema = Joi.object({
    bookAuthor: Joi.objectId().required(),
    bookTitle: Joi.string().min(2).max(128).required(),
    bookISBN: Joi.string().length(13).required(),
    bookSynopsis: Joi.string().max(2048),
    bookGenre: Joi.objectId(),
    bookLanguage: Joi.string().max(32),
    bookPublishedDate: Joi.date(),
    bookIsFeatured: Joi.boolean(),
    bookImage: Joi.string().uri(),
  });

  return schema.validate(book);
}


module.exports = router;
