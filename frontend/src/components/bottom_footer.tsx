import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../common_styles.css';

const BottomFooter: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="footer-content">
            <div className="footer-links">
              <a href="/books" target="_blank" rel="noopener noreferrer" className="footer-link">
                All Christmas Books
              </a>
              <a href="/authors" target="_blank" rel="noopener noreferrer" className="footer-link">
                All Authors
              </a>
              <a href="/about" className="footer-link">
                About
              </a>
              <a href="/register" className="footer-link">
                Register
              </a>
              <a href="/terms" className="footer-link">
                Terms & Conditions
              </a>
              <a href="/privacy" className="footer-link">
                Privacy Policy
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default BottomFooter;
