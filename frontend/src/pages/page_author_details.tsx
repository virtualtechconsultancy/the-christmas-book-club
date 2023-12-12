import AuthorDetails from '../components/details_author';
import MainHeader from '../components/main_header';
import BottomFooter from '../components/bottom_footer';
import { useLocation} from 'react-router-dom'

const AuthorDetailsPage = () => {
  
  const location = useLocation();
  
  return (
    <div>
      <MainHeader></MainHeader>
      <div id="page">
          <h2>Details</h2>
          <AuthorDetails authorID={location.state.id}/>
      </div>
      <BottomFooter></BottomFooter>
    </div>
  );
};

export default AuthorDetailsPage;

