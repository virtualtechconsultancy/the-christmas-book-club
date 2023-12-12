import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import '../common_styles.css';

interface Author {
  authorName: string
  authorBio: string;
  authorNationality: string;
}

interface Book {
  _id: string;
  bookTitle: string;
  bookGenre: Genre;
  bookSynopsis: string;
  bookAuthor: Author;
  bookImage: string;
  bookPublishedDate: string;
  bookISBN: string;
}

interface Genre {
  genreName:string
}

function BooksList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<Book[]>("http://localhost:3000/api/books")
      .then((res) => setBooks(res.data))
      .catch(err => {
        setError(err.message);
      });
  }, []);

  const navigate = useNavigate();
  const toBook = (id: string) => {
    navigate('/book', { state: { id: id } });
  }

  return (
    <>
      {error && <div className="error-message">{error}</div>}
      <div className="books-grid-layout">
        {books.map((book) => (
          <div className="card-container" key={book._id} onClick={() => toBook(book._id)}>
            <Card>
              <Card.Img variant="top" src={book.bookImage} alt={book.bookTitle} />
              <Card.Body>
                <Card.Title className="card-title">{book.bookTitle}</Card.Title>
                <Card.Text className="card-text">{book.bookSynopsis}</Card.Text>
                <Card.Text className="card-text">{book.bookAuthor.authorName}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );



}

export default BooksList;