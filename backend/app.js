// app
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const dataSeed = require('./database/database_seeder');

const Joi = require('joi');
const mongoDBConnection = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views');

mongoDBConnection
	.connect('mongodb://127.0.0.1:27017/the-christmas-book-club-db')
	.then(() => console.log('Connected to the-christmas-book-club DB...'))
	.catch((err) => console.log(`Error: ${err.message}`));

const homeRoute = require('./routes/home_route');
const genreRoute = require('./routes/genre_route');
const authorRoute = require('./routes/author_route');
const userRoute = require('./routes/user_route');
const bookRoute = require('./routes/book_route');
const reviewRoute = require('./routes/review_route');

app.use('/', homeRoute);
app.use('/api/genres', genreRoute);
app.use('/api/authors', authorRoute);
app.use('/api/users', userRoute);
app.use('/api/books', bookRoute);
app.use('/api/reviews', reviewRoute);

const port = process.env.PORT || 3000;


app.listen(port, () => {
	console.log(`The Christmas Book Club listening on port ${port}...`);
});
