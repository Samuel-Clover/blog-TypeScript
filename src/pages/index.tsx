import Header from '../componets/Header/Header';
import Section from '../componets/Section/Section';
import ImageSection from '../../public/image1.png';
import BoxSecondary from '../componets/BoxSecondary/BoxSecondary';
import BoxContainer from '../componets/BoxContainer/BoxInitial';
import Footer from '../componets/Footer/Footer';
export default function Home() {
  return (
  <>
  <Header/>
  <Section image={ImageSection} text="Se increva-se para receber novos conteúdos todas as semanas. "/>
  <BoxContainer text="Ultimos Posts" />
  <BoxSecondary />
  <Footer/>
  </>
  )
}
