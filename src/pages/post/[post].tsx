import Header from '../../componets/Header/Header';
import Section from '../../componets/Section/Section';
import ImageSection from '../../../public/image3.png';
import BoxPost from '../../componets/BoxContainer/boxPost';
import MenuContainer from '../../componets/MenuContainer/MenuContainer';
import Footer from '../../componets/Footer/Footer';
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