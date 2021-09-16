import React, { ReactNode } from 'react'
import styles from '../Section/styles.module.css'
import Link from 'next/link'
import Image from "next/image";
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import BoxContainer from '../BoxContainer/BoxInitial';
type ImageOrItemprops = {
  image:any;
  text?:string;
}
export default function Section ({text, image} : ImageOrItemprops) {
    return (
      
    <section className={styles.sectionContainer}>
          <div className={styles.divContainer1} />
          {text && (
            <>
            <div className={styles.textTitle}>
              <h2>{text} <Button variant="contained" type="submit" href={"/login"} className={styles.button_style} endIcon={<ArrowForwardIcon/>}> sign up </Button></h2> 
              
            </div>
            </>
            )}
           
            <Image src={image} width={1500} height={1240}  placeholder='blur' alt='' /> 
          <div className={styles.divContainer2} />  
      </section>
    );

}