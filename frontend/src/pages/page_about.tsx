// import React from 'react';
import MainHeader from '../components/main_header';
import BottomFooter from '../components/bottom_footer';
import whitebg_logo from '../assets/christmas-book-club-logo-whitebg.png';
import '../common_styles.css';

const Home = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <div className="page">
                <h2>About The Christmas Book Club</h2>
                <img src={whitebg_logo} alt="The Christmas Book Club Logo" className="about-logo" />
                <div className="text-block">
                    <p>Welcome to The Christmas Book Club, a festive and scholarly haven for book enthusiasts and Christmas lovers alike! Created as a part of the University of West of Scotland's COMP10020 module, our club is more than just a place to review books. It's a community where the magic of Christmas and the joy of reading come together to create unforgettable experiences. At The Christmas Book Club, we believe that books are the gateway to adventures, knowledge, and new perspectives, especially during the Christmas season, which has its unique charm and warmth. Our club is dedicated to exploring a diverse range of literature, from timeless Christmas classics to contemporary winter tales, each bringing its unique flavor to our festive reading list.</p>

                    <p>Our Mission: To foster a love for reading and to bring together students and faculty in a shared passion for literature and Christmas cheer. We aim to create a vibrant community that appreciates the power of a good book to transport us to different worlds and times – all while wrapped in the cozy ambiance of the holiday season.</p>

                    <p>Our Activities: Throughout the year, we engage in various activities, from book discussions and author meet-and-greets to creative writing workshops and festive gatherings. We hold special events during the Christmas season, including themed book nights, charity book drives, and holiday storytelling sessions, all aiming to spread the joy of reading and the spirit of giving.</p>

                    <p>Our Community: The Christmas Book Club is more than just a book club; it's a family of like-minded individuals who find joy in the written word and the festive spirit. Whether you're a literature major, a casual reader, or someone who finds solace in the pages of a book, our club welcomes you with open arms. Together, we embark on literary journeys, share insights, and create memories that last a lifetime.</p>

                    <p>Join us at The Christmas Book Club, where every page turned is a celebration of the festive spirit and the love for literature!</p>
                </div>
            </div>
            <BottomFooter></BottomFooter>
        </div>
    );
};

export default Home;


