const express = require('express');
const router = express.Router();
const AuthorModel = require('../models/author_model');


router.get('/', async (req, res) => {
	const authors = await AuthorModel.find();
	res.send(authors);
});

router.get('/:id', async (req, res) => {
	const author = await AuthorModel.findById(req.params.id);
	if (!author) return res.status(404).send(`The author with the ID "${req.params.id}" cannot be found.`);
	res.send([author]);
});

router.post('/', async (req, res) => {
	let author = new AuthorModel({
		authorName: req.body.authorName,
		authorBio: req.body.authorBio,
		authorNationality: req.body.authorNationality,
		authorDOB: req.body.authorDOB,
		authorDOD: req.body.authorDOD,
	});

	try {
		author = await author.save();
		
	} catch (error) {
		console.log();
		return res.status(400).send(error.message);
	}
	res.send('A new author ${author} has been successfully added to the database');
});

router.put('/:id', async (req, res) => {
	const author = await AuthorModel.findByIdAndUpdate(
		req.params.id,
		{
			authorName: req.body.authorName,
			authorBio: req.body.authorBio,
			authorNationality: req.body.authorNationality,
			authorDOB: req.body.authorDOB,
			authorDOD: req.body.authorDOD,
		},
		{ new: true }
	);

	if (!author) return res.status(404).send(`The author with the ID "${req.params.id}" cannot be found.`);
	res.send(author);
});

router.delete('/:id', async (req, res) => {
	const author = await AuthorModel.findByIdAndDelete(req.params.id);
	if (!author) return res.status(404).send(`The author with the ID "${req.params.id}" cannot be found.`);
	res.send(author);
});

module.exports = router;
