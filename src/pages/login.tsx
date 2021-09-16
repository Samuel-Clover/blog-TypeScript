import Header from '../componets/Header/Header';
import Section from '../componets/Section/Section';
import ImageSection from '../../public/image3.png';
import BosxSingle from '../componets/BoxSecondary/BoxSecondary';
import BoxContainer from '../componets/BoxContainer/BoxInitial'
import MenuContainer from '../componets/MenuContainer/MenuContainer';
import BoxVerification from '../componets/BoxVerification/BoxVerification'
import styles from '../ui/boxverification.module.css';
export default function Login() {
    return (
        <>
        <Header/>
        <Section image={ImageSection}/>
            <div className={styles.boxLoginPositon} >   
                <BoxVerification/>
            </div>
       
        </>
    );
}