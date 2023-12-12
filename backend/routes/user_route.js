const express = require('express');
const router = express.Router();
const mongoDBConnection = require('mongoose');
const UserModel = require('../models/user_model');

router.get('/', async (req, res) => {
	const users = await UserModel.find();
	res.send(users);
});

router.get('/:id', async (req, res) => {
	const user = UserModel.findById(req.params.id);
	if (!user) return res.status(400).send(`The user with the ID "${req.params.id}" cannot be found.`);
	res.send(user);
});

router.post('/', async (req, res) => {
	let user = new UserModel({
		userUsername: req.body.userUsername,
		userEmail: req.body.userEmail,
		userIsAdmin: req.body.userIsAdmin,
	});
	user = await user.save();
	res.send(user);
});

router.put('/:id', async (req, res) => {
	const user = await UserModel.findByIdAndUpdate(req.params.id, { userUsername: req.body.userUsername, userEmail: req.body.userEmail, userIsAdmin: read.body.userIsAdmin }, { new: true });
	if (!user) return res.status(404).send(`The user with the ID "${req.params.id}" cannot be found.`);
	res.send(user);
});

router.delete('/:id', async (req, res) => {
	const user = await UserModel.findByIdAndDelete(req.params.id);
	if (!user) return res.status(404).send(`The user with the ID "${req.params.id}" cannot be found.`);
	res.send(user);
});

module.exports = router;
