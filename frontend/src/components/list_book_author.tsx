import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import axios from "axios";
import '../common_styles.css';

interface Book {
  _id: string;
  bookTitle: string;
  bookGenre: Genre;
  bookPublishedDate: string;
}

interface Genre {
  genreName: string;
}

function BooksList({ authorID }: { authorID: string }) {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<Book[]>(`http://localhost:3000/api/books/searchByAuthor/${authorID}`)
      .then((res) => setBooks(res.data))
      .catch(err => {
        setError(err.message);
      });
  }, [authorID]);

  const navigate = useNavigate();

  const toBook = (id: string) => {
    navigate('/book', { state: { id: id } });
  };

  return (
    <>
      {error && <div className="error-message">{error}</div>}
      <div className="details-container">
        {books.map((book) => (
          <Card className="card-container" key={book._id} onClick={() => toBook(book._id)}>
            <Card.Body>
              <Card.Title className="card-title">{book.bookTitle}</Card.Title>
              <Card.Subtitle className="card-subtitle">Genre: {book.bookGenre.genreName}</Card.Subtitle>
              <Card.Text className="card-text">Published: {new Date(book.bookPublishedDate).getFullYear()}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default BooksList;
