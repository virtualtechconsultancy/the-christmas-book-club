import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import AuthorBooksList from './list_book_author';
import axios from "axios";
import '../common_styles.css';

interface AuthorDetails {
    _id: string;
    authorName: string;
    authorBio: string;
    authorNationality: string;
    authorDOB: string;
}

function AuthorDetails({ authorID } : {authorID : string}) {
    const [authorDetails, setAuthorDetails] = useState<AuthorDetails[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
      axios
        .get<AuthorDetails[]>(`http://localhost:3000/api/authors/${authorID}`)
        .then((res) => setAuthorDetails(res.data))
        .catch(err => {
         setError(err.message);
      });
    }, [authorID]);
  
    return (
        <div className="details-container">
          {error && <div className="error-message">{error}</div>}
          {authorDetails.map(author => (
            <div className="card-container" key={author._id}>
              <Card className="author-card">
                <Card.Body>
                  <Card.Title className="card-title">{author.authorName}</Card.Title>
                  <div className="author-info">
                    <span className="author-attribute">Nationality:</span>
                    <span>{author.authorNationality}</span>
                  </div>
                  <div className="author-info">
                    <span className="author-attribute">Born:</span>
                    <span>{new Date(author.authorDOB).toLocaleDateString()}</span>
                  </div>
                  <Card.Text className="card-text author-bio">{author.authorBio}</Card.Text>
                </Card.Body>
              </Card>
              <div className="books-section">
                <h3 className="section-title">Books by the Author</h3>
                <AuthorBooksList authorID={authorID}/>
              </div>
            </div>
          ))}
        </div>
      );
}

export default AuthorDetails;
