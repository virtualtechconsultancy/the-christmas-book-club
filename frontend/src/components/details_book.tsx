import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ReviewList from './list_review';
import axios from "axios";
import '../common_styles.css';

interface Author {
    _id: string;
    authorName:string
    authorBio:string;
    authorNationality:string;
}
interface Genre {
    genreName:string
}

interface BookDetails {
  _id: string;
  bookTitle: string;
  bookSynopsis: string;
  bookAuthor: Author;
  bookISBN: string;
  bookGenre: Genre;
  bookPublishedDate: string;
  bookImage: string;
}

function BookDetails({ bookID } : {bookID : string}) {
    const [bookDetails, setBookDetails] = useState<BookDetails[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
      axios
        .get<BookDetails[]>("http://localhost:3000/api/books/"+bookID) 
        .then((res) => setBookDetails(res.data))
        .catch(err => {
         setError(err.message);
    });
    }, []);
  
    const navigate = useNavigate();
    const toAuthor=(id:string)=>{
      navigate('/author',{state:{id:id}});
    }
    
    return (
        <>
          {error && <div className="error-message">{error}</div>}
          <div className="details-container">
            {bookDetails.map(book => (
              <div className="card-container" key={book._id}>
                <Card>
                  <Card.Img variant="top" src={book.bookImage} alt={book.bookTitle} />
                  <Card.Body>
                    <Card.Title className="card-title">{book.bookTitle}</Card.Title>
                    <Card.Text className="card-text">Synopsis: {book.bookSynopsis}</Card.Text>
                    <a onClick={() => toAuthor(book.bookAuthor._id)} className="card-link">
                      <Card.Text>Book's Author: {book.bookAuthor.authorName}</Card.Text>
                    </a>
                    <Card.Text className="card-text">Genre: {book.bookGenre.genreName}</Card.Text>
                    <Card.Text className="card-text">Published on: {book.bookPublishedDate.slice(0, 10)}</Card.Text>
                    <Card.Text className="card-text">ISBN: {book.bookISBN}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
            <h2 className="section-title">Reviews</h2>
            <ReviewList bookID={bookID} />
          </div>
        </>
      );
  }
  
  export default BookDetails;