import Header from '../componets/Header/index';
import Section from '../componets/Section/index';
import ImageSection from '../../public/image3.png';
import BosxSingle from '../componets/BoxSecondary/index';
import BoxContainer from '../componets/BoxContainer/BoxInitial'
import MenuContainer from '../componets/MenuContainer/index';
import BoxVerification from '../componets/BoxVerification/index'
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