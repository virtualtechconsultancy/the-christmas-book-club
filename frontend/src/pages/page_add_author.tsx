import '../common_styles.css';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import MainHeader from '../components/main_header';
import BottomFooter from '../components/bottom_footer';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AddNewAuthorPage: React.FC = () => {
  const navigate = useNavigate();

  const [authorInfo, setAuthorInfo] = useState({
    authorName: '',
    authorBio: '',
    authorNationality: '',
    authorDOB: '',
    authorDOD: '',
  });

  const handleInputChangeName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAuthorInfo({ ...authorInfo, [name]: value });
  };

  const handleInputChangeBio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAuthorInfo({ ...authorInfo, [name]: value });
  };

  const handleInputChangeNationality = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAuthorInfo({ ...authorInfo, [name]: value });
  };

  const handleInputChangeDOB = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAuthorInfo({ ...authorInfo, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    axios.post('http://localhost:3000/api/authors', {
      authorName: authorInfo.authorName,
      authorBio: authorInfo.authorBio,
      authorNationality: authorInfo.authorNationality,
      authorDOB: new Date(authorInfo.authorDOB),
      authorDOD: null,
    })
    .then(function (response) {
      console.log(response);
      navigate('/authors');
    })
    .catch(function (error) {
      console.log(error);
    });

    
  
    console.log('Author information submitted:', authorInfo);
  };

  return (
    <>
      <MainHeader />
      <div>
        <h2>Add a new Author</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formAuthor">
            <Form.Label>Author's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. J.K. Rowling"
              name="authorName"
              value={authorInfo.authorName}
              onChange={handleInputChangeName}
            />
          </Form.Group>

          <br/>

          <Form.Group controlId="biography">
            <Form.Label>Author's Bio</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Rowling was born and raised in..."
              name="authorBio"
              value={authorInfo.authorBio}
              onChange={handleInputChangeBio}
            />
          </Form.Group>

          <br/>

          <Form.Group controlId="nationality">
            <Form.Label>Author's Nationality</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Scotland, UK"
              name="authorNationality"
              value={authorInfo.authorNationality}
              onChange={handleInputChangeNationality}
            />
          </Form.Group>
          <br/>

          <Form.Group controlId="birthdate">
            <Form.Label>Author's DOB (YYYY-MM-DD)</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. 1999-07-20"
              name="authorDOB"
              value={authorInfo.authorDOB}
              onChange={handleInputChangeDOB}
            />
          </Form.Group> 
          <br/>

          <Button variant="primary" type="submit" className="w-100">
            Submit New Author
          </Button>
        </Form>
      </div>
      <BottomFooter />
    </>
  );
};

export default AddNewAuthorPage;