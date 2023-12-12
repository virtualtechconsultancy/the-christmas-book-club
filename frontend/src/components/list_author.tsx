import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from "axios";

interface Author{
  _id: string;
  authorName:string
  authorBio:string;
  authorNationality:string;
  authorDOB: string;
}

function AuthorsList() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [error, setError] = useState('');

    useEffect(() => {
      axios
        .get<Author[]>("http://localhost:3000/api/authors")
        .then((res) => setAuthors(res.data))
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
          {authors.map(author => (
            <div className="card-container" key={author._id} onClick={() => toAuthor(author._id)}>
              <Card>
                <Card.Body>
                  <Card.Title className="card-title">{author.authorName}</Card.Title>
                  <Card.Text className="card-text">{author.authorNationality}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default AuthorsList;