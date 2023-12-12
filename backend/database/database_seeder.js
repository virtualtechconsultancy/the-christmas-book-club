const { faker } = require('@faker-js/faker');
const AuthorModel = require('../models/author_model');
const UserModel = require('../models/user_model');
const mongoDBConnection = require('mongoose');
const { GenreModel } = require('../models/genre_model');
const BookModel = require('../models/book_model');
const ReviewModel = require('../models/review_model');

mongoDBConnection
	.connect('mongodb://127.0.0.1:27017/book-review-site-db')
	.then(() => console.log('Connected to Book Review Site Database'))
	.catch((error) => console.log(`Error: ${error.message}`));

const genres = [
	'Fiction',
	'Non-Fiction',
	'Mystery',
	'Thriller',
	'Horror',
	'Historical',
	'Romance',
	'Western',
	'Bildungsroman',
	'Fantasy',
	'Science Fiction',
	'Dystopian',
	'Adventure',
	'Memoir',
	'Biography',
	'Young Adult',
	'Children’s',
	'Self-help',
	'Health',
	'Guide / How-to',
	'Travel',
	'Cookbook',
	'Humor',
	'Art & Photography',
	'Religion & Spirituality',
	'Politics',
	'History',
	'True Crime',
	'Science & Technology',
	'Sports'
];

function getSomeGenres(max = 10) {
	genres.forEach((element) => {
		const genre = new GenreModel({
			genreName: element,
		});
		console.log(genre);
		genre.save();
	});
}

async function getSomeAuthors(max = 10) {
	for (let i = 0; i < max; i++) {
		const author = new AuthorModel({
			authorName: faker.person.fullName(),
			authorBio: faker.person.bio(),
			authorNationality: faker.location.country(),
			authorDOB: faker.date.birthdate({ min: 1849, max: 1999 }),
		});

		try {
            const savedAuthor = await author.save();
            console.log("The Author has been saved:", savedAuthor);
        } catch (error) {
            console.error("Error", error);
        }
	}
}

function getSomeUsers(max = 10) {
	for (let i = 0; i < max; i++) {
		const user = new UserModel({
			userUsername: faker.internet.displayName(),
			userEmail: faker.internet.email(),
			userIsAdmin: false,
		});
		console.log(user);
		
		try {
			user.save();
		} catch (error) {
			console.log(error.message);
		}
	}
}

async function getSomeBooks(max = 10) {
    const authors = await AuthorModel.find();
    const genres = await GenreModel.find();

    for (let i = 0; i < max; i++) {
        const bookImageURL = `https://picsum.photos/200/300?random=${i}`;

        const book = new BookModel({
            bookTitle: faker.lorem.words(3),
            bookAuthor: authors[Math.floor(Math.random() * authors.length)]._id,
            bookISBN: faker.datatype.number({ min: 1575555555555, max: 9999999999999 }).toString(),
            bookSynopsis: faker.lorem.paragraph(),
            bookGenre: genres[Math.floor(Math.random() * genres.length)]._id,
            bookLanguage: faker.lorem.word(),
            bookPublishedDate: faker.date.past(),
            bookIsFeatured: i === 0,
            bookImage: bookImageURL 
        });

        try {
            await book.save();
        } catch (error) {
            console.error(error.message);
        }
    }
}

async function getSomeReviews(max = 10) {
	const users = await UserModel.find();
	const books = await BookModel.find();

	for (let i = 0; i < max; i++) {
		const review = new ReviewModel({
			reviewRating: faker.number.int({ min: 1, max: 5 }),
			reviewText: faker.lorem.paragraph(),
			reviewUser: users[Math.floor(Math.random() * users.length)]._id,
			reviewBook: books[Math.floor(Math.random() * books.length)]._id,
		});

		console.log(review);

		try {
			await review.save();
		} catch (error) {
			console.log(error.message);
		}
	}
}

async function seedData() {
    await getSomeAuthors(6);
    await getSomeUsers(6);
    await getSomeGenres(6);
    await getSomeBooks(6);
    await getSomeReviews(6);
}

seedData().then(() => {
    console.log("Seeding new database collections succeeded.");
}).catch(error => {
    console.error("Error", error);
});
