import BooksList from '../components/list_book';
import FeaturedBook from '../components/list_featured';
import MainHeader from '../components/main_header';
import BottomFooter from '../components/bottom_footer';

const HomePage = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <div id="page">
                <h2>Featured Books</h2>
                <FeaturedBook></FeaturedBook>
                <h2>Christmas Festival Books</h2>
                <BooksList></BooksList>
            </div>
            <BottomFooter></BottomFooter>
        </div>
    );
};

export default HomePage;

