/* eslint-disable @next/next/link-passhref */
import React from 'react'
import styles from '../Footer/footer.module.css';
import Image from "next/image";
import Instagram from '../../../public/instagram.svg';
import Github from '../../../public/github.svg';
import Likedin from '../../../public/linkedin.svg';
import Twitter from '../../../public/twitter.svg';
import Link from 'next/link';
export default function Footer () {
    return (
        <>
        <footer id={styles.Main_footer}>
           <div className={styles.Quem_somos}>
                <h3>Quem somos</h3>
                <hr/>
                <p>Um desenvolvedor full stack que gosta de novas tecnologias e sempre aprimorando ao máximo minhas stacks de front e back, e também gosto bons jogos nas horas vagas.</p>
           </div>
           <div className={styles.Post_lancamentos}>
                <h3> Posts a serem lançados</h3>
                <hr/>
                <p>Como entender definitivamente o POO</p>
                <p>Como melhorar o farm</p>
                <p>suba de elo com facilidade</p>
           </div>
           <div className={styles.Contato}>
                <h3>Contato</h3>
                <hr/>
                <p><span>Contato profissional:</span> samuekruszynski@gmail.com</p> 
                <span>Redes sociais:  
                    <Link href="/"><button><Image src={Instagram} alt=''/></button></Link>
                    <Link href="/"><button><Image src={Github} alt=''/></button></Link>
                    <Link href="/"><button><Image src={Likedin} alt=''/> </button></Link> 
                    <Link href="/"><button><Image src={Twitter} alt=''/></button></Link>
                </span>
           </div>
        </footer>
        <div className={styles.copyright}>
            <span>direitos resevados copyright 2021</span>
        </div>
        </>
    );
}