import {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import axios from "axios";

interface User{
  userUsername: string;
}

interface Review {
  _id: string;
  reviewRating: string;
  reviewText: string;
  reviewUser: User;
}

function ReviewList({ bookID } : {bookID : string}) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState('');

    useEffect(() => {
      axios
        .get<Review[]>("http://localhost:3000/api/reviews/searchByBook/"+bookID)
        .then((res) => setReviews(res.data))
        .catch(err => {
         setError(err.message);
    });
    }, []);

    return (
      <>
        {error && <div className="error-message">{error}</div>}
        <div className="details-container">
          {reviews.map(review => (
            <div className="card-container" key={review._id}>
              <Card>
                <Card.Body>
                <Card.Subtitle className="card-text">{review.reviewRating}/10</Card.Subtitle>
                  <Card.Title className="card-title">{review.reviewUser.userUsername}</Card.Title>
                  <Card.Text className="card-text">{review.reviewText}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default ReviewList;