import MainHeader from '../components/main_header';
import BottomFooter from '../components/bottom_footer';

export default function Page404() {
    return (
        <div>
            <MainHeader></MainHeader>
            <div id="page">
                <h3 style={{padding: '0.5em'}}>Error 404. Sorry, this page does not exist.</h3>
                <h4>Error 404</h4>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <BottomFooter></BottomFooter>
        </div>
    )
}