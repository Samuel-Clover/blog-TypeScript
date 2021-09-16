/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FormEvent } from 'react';
import styles from '../Header/header.module.css';
import Link from 'next/link';
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import { useAuth } from '../../hooks/useAuth';
import {Avatar, Button, IconButton, makeStyles, Menu, MenuItem } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { useRouter } from 'next/router'
export default function Header () {
 const {user, LoggoutwidhGoogle} = useAuth()
 const router = useRouter()
  const useStyles = makeStyles((theme) =>
  createStyles({
    small: {
      width: theme.spacing(3.3),
      height: theme.spacing(3.3),
      marginRight: theme.spacing(1),
      
    },
    color: {
      color: 'white',
    }
  }),
);


const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
  const classes = useStyles()
    return (
    <header className={styles.headerContainer}>
          <div className={styles.responsivo}>
            <i>icone</i>
          </div>
          <div className={styles.LogoItem}>
            <Image src={Logo} alt=''/>  
          </div>
        <nav className={styles.ContainerMenu}>
            <ul>
                <li><Link href="/"><a>Inicio</a></Link></li>
                <li><Link href="/postsgeral"><a>Posts-Geral</a></Link></li>
                <li><a onClick={()=> window.scroll({top: 1100,left: 0, behavior: 'smooth'})}>Sobre</a></li>
                <li><a onClick={()=> window.scroll({top: 1100,left: 0, behavior: 'smooth'})}>Contato</a></li>
            </ul>

        </nav>
        {!user ? (
        <div className={styles.LoginMenu}>
            <Link href="/login"><a>sign in</a></Link>
        </div> 
        ): (
        <div className={styles.LoginMenu}>
      
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <Avatar alt="Cindy Baker" src={user.avatar} className={classes.small} />
          <span className={classes.color}>{user.name}</span>
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        <MenuItem onClick={LoggoutwidhGoogle}>Logout</MenuItem>
      </Menu>
        </div> 
        )}
      </header>
    )
}