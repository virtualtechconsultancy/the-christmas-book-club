import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import MainHeader from '../components/main_header';
import BottomFooter from '../components/bottom_footer';

const AddNewBookPage: React.FC = () => {
  const [bookInfo, setBookInfo] = useState({
    bookTitle: '',
    bookAuthor: '',
    bookISBN: '',
    bookSynopsis: '',
    bookGenre: '',
    bookLanguage: '',
    bookPublishedDate: '',
    bookIsFeatured: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookInfo({ ...bookInfo, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setBookInfo({ ...bookInfo, [name]: checked });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    console.log('Book information submitted:', bookInfo);
  };

  return (
    <>
      <MainHeader />
      <div>
        <h2>Add a new Book</h2>
        <Form onSubmit={handleSubmit}>
          {/* Add form fields for book information */}
          <Form.Group controlId="formTitle">
            <Form.Label>Book's Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Harry Potter and the Order of the Pheonix"
              name="bookTitle"
              value={bookInfo.bookTitle}
              onChange={handleInputChange}
            />
          </Form.Group>
          <br/>

          <Form.Group controlId="formBookISBN">
            <Form.Label>ISBN (13 digits)</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. 111377463819"
              name="bookISBN"
              value={bookInfo.bookISBN}
              onChange={handleInputChange}
            />
          </Form.Group>
        
          <br/>
          <Form.Group controlId="formBookSynopsis">
            <Form.Label>Book Synopsis</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. This book is about the chronicals of..."
              name="bookSynopsis"
              value={bookInfo.bookSynopsis}
              onChange={handleInputChange}
            />
          </Form.Group>
          <br/>
          <Form.Group controlId="formBookPublishDate">
            <Form.Label>Published On (YYYY-MM-DD)</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. 1990-07-20"
              name="bookPublishedDate"
              value={bookInfo.bookPublishedDate}
              onChange={handleInputChange}
            />
          </Form.Group>

          <br/>

          <Form.Group controlId="formFeaturedBook">
            <Form.Check
              type="checkbox"
              label="Is this a Featured Book?"
              name="bookIsFeatured"
              checked={bookInfo.bookIsFeatured}
              onChange={handleCheckboxChange}
            />
          </Form.Group>

          <br/>
          <Button variant="primary" type="submit" className="w-100">
            Submit New Book
          </Button>
        </Form>
      </div>
      <BottomFooter />
    </>
  );
};

export default AddNewBookPage;