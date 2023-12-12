import '../common_styles.css';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import MainHeader from '../components/main_header';
import BottomFooter from '../components/bottom_footer';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const UserRegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    userEmail: '',
    userUsername: '',
    userPassword: '',
  });

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    axios.post('http://localhost:3000/api/users', {
        userEmail: userInfo.userEmail,
      userUsername: userInfo.userUsername,
      userPassword: userInfo.userPassword,
      
    })
    .then(function (response) {
      console.log(response);
      navigate('/users');
    })
    .catch(function (error) {
      console.log(error);
    });

    
  
    console.log('User Registered: ', userInfo.userEmail);
  };

  return (
    <>
      <MainHeader />
      <div>
        <h2>Register for an Account</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUser">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. mohammed-m@gmail.com"
              name="userEmail"
              value={userInfo.userEmail}
              onChange={handleInputEmail}
            />
          </Form.Group>

          <br/>
          <Form.Group controlId="formUser">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. mohammed-1234"
              name="userName"
              value={userInfo.userUsername}
              onChange={handleInputUsername}
            />
          </Form.Group>

          <br/>

          <Form.Group controlId="formUser">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="********"
              name="userPassword"
              value={userInfo.userPassword}
              onChange={handleInputPassword}
            />
          </Form.Group>
          
          <br/>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </div>
      <BottomFooter />
    </>
  );
};

export default UserRegisterPage;