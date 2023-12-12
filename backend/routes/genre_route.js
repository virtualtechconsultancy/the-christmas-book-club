const express = require('express');
const router = express.Router();
const { GenreModel, validate } = require('../models/genre_model');

router.get('/', async (req, res) => {
	const genres = await GenreModel.find().sort('genreName');
	res.send(genres);
});

router.get('/:id', async (req, res) => {
	const genre = await GenreModel.findById(req.params.id);
	if (!genre) return res.status(404).send(`The genre with the ID "${req.params.id}" cannot be found.`);
	res.send(genre);
});

router.post('', async (req, res) => {
	const { error } = validate(req.body.genreName);
	if (error) return res.status(400).send(error.message);

	let genre = new GenreModel({ genreName: req.body.genreName });
	try {
		genre = await genre.save();
	} catch (error) {
		console.log(error.message);
		return res.status(400).send(error.message);
	}
	res.send(genre);
});

router.put('/:id', async (req, res) => {
	const { error } = validate(req.body.genreName);
	if (error) return res.status(400).send(error.message);

	const genre = await GenreModel.findByIdAndUpdate(req.params.id, { genreName: req.body.genreName }, { new: true });
	if (!genre) return res.status(404).send(`The genre with the ID "${req.params.id}" cannot be found.`);

	res.send(genre);
});

router.delete('/:id', async (req, res) => {
	const genre = await GenreModel.findByIdAndDelete(req.params.id);
	if (!genre) return res.status(404).send(`The genre with the ID "${req.params.id}" cannot be found.`);
	res.send(genre);
});

module.exports = router;
