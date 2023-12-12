import BooksList from '../components/list_book';
import MainHeader from '../components/main_header';
import BottomFooter from '../components/bottom_footer';

const BookListPage = () => {
  return (
    <div>
    <MainHeader></MainHeader>
    <div id="page">
        <h2>Christmas Festival Books</h2>
        <BooksList></BooksList>
    </div>
    <BottomFooter></BottomFooter>
    </div>
  );
};

export default BookListPage;

