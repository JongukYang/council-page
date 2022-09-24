import Banner from '../Banner'
import Footer from '../Footer'
import Summary_pages from './../Summary_pages';
import HSU_pages from './../HSU_pages';
import Cardnews from './../Cardnews';


function Main(){
    return(
        <>
        <Banner/>
        <Summary_pages/>
        <HSU_pages/>
        <Cardnews/>
        <Footer />
        </>
    );
}

export default Main;