import React, { useEffect, useState } from 'react'
import styles from './boxverification.module.css'
import Link from 'next/link'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconGoogle from '../../../public/google-icon.svg';
import Img from 'next/image';
import Button from '@material-ui/core/Button';
import { useAuth } from '../../hooks/useAuth';

export default function BoxVerification () {
  const {user , signInWithGoogle} = useAuth()
  const Theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
        
      },
      secondary: {
        main: '#1976d2',
      }

    },
  });
  
    return (
        <div className={styles.BoxDynamicContainer}>
            <h3>Login</h3>
            <div className={styles.icon}/>
            <hr/>
              <form className={styles.positionform}>
              <ThemeProvider theme={Theme}>
                {user ? (
                <Button variant="contained" disabled startIcon={<Img src={IconGoogle}/>} className={styles.ButtonItem} color="primary">Ops você ja fez um login do google</Button>
                ): (<Button variant="contained" onClick={signInWithGoogle}  startIcon={<Img src={IconGoogle}/>} className={styles.ButtonItem} color="primary">fazer login com o google</Button>)}
                <Button disabled variant="contained" startIcon={<FacebookIcon />} className={styles.ButtonItem}  color="primary">Em breve disponivel Facebook</Button>
                <Button disabled variant="contained" startIcon={<InstagramIcon />} className={styles.ButtonItem}  color="primary">Em breve disponivel Instagram</Button>
                <Button disabled variant="contained" startIcon={<GitHubIcon />} className={styles.ButtonItem}  color="primary">Em breve disponivel Github</Button>
              </ThemeProvider>
             </form>
        </div>
 
    );
}

