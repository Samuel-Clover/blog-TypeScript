import Header from '../../componets/Header/index';
import Section from '../../componets/Section/index';
import ImageSection from '../../../public/image3.png';
import BoxPost from '../../componets/BoxContainer/boxPost';
import MenuContainer from '../../componets/MenuContainer/index';
import Footer from '../../componets/Footer/index';
export default function Post() {
    return(
     <>
    <Header/>
    <Section image={ImageSection}/>
    <BoxPost text={`Mobile legends`} /> 
    <Footer/>
     </>
    );
}