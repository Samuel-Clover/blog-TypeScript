import Header from '../componets/Header/Header';
import Section from '../componets/Section/Section';
import ImageSection from '../../public/image3.png';
import BoxContainer from '../componets/BoxContainer/Boxpages';
import MenuContainer from '../componets/MenuContainer/MenuContainer';
import styles from '../ui/boxstyle.module.css';
import Footer from '../componets/Footer/Footer';
export default function postsgeral() {
  return (
  <>
    <Header/>
    <Section image={ImageSection}/>
    <BoxContainer  text={'Posts por Categoria'}/> 
    <MenuContainer textGlobals="Categoria"/>
    <Footer/>
  </>
  )
}
