import AuthorsList from '../components/list_author';
import MainHeader from '../components/main_header';
import BottomFooter from '../components/bottom_footer';

const AuthorListPage = () => {
  return (
    <div>
    <MainHeader></MainHeader>
    <div id="page">
        <h2>All Authors</h2>
        <AuthorsList></AuthorsList>
    </div>
    <BottomFooter></BottomFooter>
    </div>
  );
};

export default AuthorListPage;

