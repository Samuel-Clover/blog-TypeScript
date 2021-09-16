import Header from '../componets/Header/index';
import Section from '../componets/Section/index';
import ImageSection from '../../public/image3.png';
import BoxContainer from '../componets/BoxContainer/Boxpages';
import MenuContainer from '../componets/MenuContainer/index';
import styles from '../ui/boxstyle.module.css';
import Footer from '../componets/Footer/index';
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
