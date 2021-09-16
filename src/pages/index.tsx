import Header from '../componets/Header/index';
import Section from '../componets/Section/index';
import ImageSection from '../../public/image1.png';
import BoxSecondary from '../componets/BoxSecondary/index';
import BoxContainer from '../componets/BoxContainer/BoxInitial';
import Footer from '../componets/Footer/index';
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
