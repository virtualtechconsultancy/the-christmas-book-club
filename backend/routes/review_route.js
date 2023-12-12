const express = require('express');
const router = express.Router();
const ReviewModel = require('../models/review_model');

router.get('/', async (req, res) => {
	try {
		const reviews = await ReviewModel.find();
		res.json(reviews);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.get('/searchByBook/:id', async (req, res) => {
	const review = await ReviewModel.find({ reviewBook: req.params.id }).populate('reviewUser').populate('reviewBook');
	if (!review) return res.status(404).send(`The review with the book ID "${req.params.id}" cannot be found.`);
	res.json(review);
});

router.get('/:id', async (req, res) => {
	const review = await ReviewModel.findById(req.params.id).populate('reviewUser').populate('reviewBook');
	if (!review) return res.status(404).send(`The review with the ID "${req.params.id}" cannot be found.`);
	res.json(review);
});

router.post('/', async (req, res) => {
	let review = new ReviewModel({
		reviewRating: req.body.reviewRating,
		reviewText: req.body.reviewText,
		reviewUser: req.body.reviewUser,
		reviewBook: req.body.reviewBook,
	});

	try {
		const newReview = await review.save();
		res.status(201).json(newReview);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.put('/:id', async (req, res) => {
	const review = await ReviewModel.findByIdAndUpdate(
		req.params.id,
		{
			reviewRating: req.body.reviewRating,
			reviewText: req.body.reviewText,
			reviewUser: req.body.reviewUser,
			reviewBook: req.body.reviewBook,
		},
		{ new: true }
	);
	if (!review) return res.status(404).send(`The book with the ID "${req.params.id}" cannot be found.`);
	res.send(review);
});

router.delete('/:id', async (req, res) => {
	const review = await BookModel.findByIdAndDelete(req.params.id);
	if (!review) return res.status(404).send(`The book with the ID "${req.params.id}" cannot be found.`);
	res.send(review);
});

router.delete('/:id', async (req, res) => {
	const book = await BookModel.findByIdAndDelete(req.params.id);
	if (!book) return res.status(404).send(`The book with the ID "${req.params.id}" cannot be found.`);
	res.send(book);
  });

module.exports = router;
