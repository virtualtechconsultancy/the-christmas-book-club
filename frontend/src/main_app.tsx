import React from 'react';
import './main_app_styles.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/page_homepage';
import About from './pages/page_about';
import BookListPage from './pages/page_book_list';
import BookDetailsPage from './pages/page_book_details';
import AuthorListPage from './pages/page_author_list';
import AuthorDetailsPage from './pages/page_author_details';
import NotFound from './pages/page_404';
import AddNewBookPage from './pages/page_add_book';
import AddNewAuthorPage from './pages/page_add_author';
import UserLoginPage from './pages/page_login';
import UserRegisterPage from './pages/page_register';
import NavBar from "./components/main_header_navbar";
import imagePath from "./assets/christmas-book-club-logo.png";

function App() {
    // Define navigation items corresponding to your routes
    let items = ["Home", "All Books", "All Authors", "About Us", "New Book", "New Author", "Login"];

    return (
        <div>
            <NavBar 
                // brandName="My Brand" 
                imageSrcPath={imagePath} 
                navItems={items}
            />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/all-books" element={<BookListPage />} />
                <Route path="/book" element={<BookDetailsPage />} />
                <Route path="/all-authors" element={<AuthorListPage />} />
                <Route path="/author" element={<AuthorDetailsPage />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/new-book" element={<AddNewBookPage />} />
                <Route path="/new-author" element={<AddNewAuthorPage />} />
                <Route path="/login" element={<UserLoginPage />} />
                <Route path="/register" element={<UserRegisterPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
