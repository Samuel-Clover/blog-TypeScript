/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FormEvent, useState } from 'react';
import styles from '../Header/header.module.css';
import Link from 'next/link';
import router from 'next/router'
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
function handleClickScroll () {
    smoothScrollTo(0, window.innerHeight)    
}
function smoothScrollTo(endX:number, endY:number, duration?:number) {
  const startX = window.scrollX || window.pageXOffset;

  const startY = window.scrollY || window.pageYOffset;
 
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 500;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) 
    return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

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
                <li><a style={{cursor: 'pointer'}} onClick={handleClickScroll}>Sobre</a></li>
                <li><a style={{cursor: 'pointer'}} onClick={handleClickScroll}>Contato</a></li>
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