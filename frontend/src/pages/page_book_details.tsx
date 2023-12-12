import BookDetails from '../components/details_book';
import MainHeader from '../components/main_header';
import BottomFooter from '../components/bottom_footer';
import { useLocation} from 'react-router-dom'

const BookDetailsPage = () => {
  
  const location = useLocation();
  
  return (
    <div>
    <MainHeader></MainHeader>
    <div id="page">
        <h2>Info about this Book</h2>
        <BookDetails bookID={location.state.id}/>
    </div>
    <BottomFooter></BottomFooter>
    </div>
  );
};

export default BookDetailsPage;

