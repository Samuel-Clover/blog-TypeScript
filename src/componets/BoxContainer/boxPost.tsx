/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styles from '../BoxContainer/boxcontainer.module.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useFirstPost } from '../../hooks/useFirstPost';
import { useRouter } from 'next/router';
import { CardMedia, createStyles, makeStyles } from '@material-ui/core';
import { usePosts } from '../../hooks/usePosts';
type TextProps = {
    text?: string;
    css?: string;
}

export default function boxPost(children : TextProps) {
  const useStyles = makeStyles((theme) =>
  createStyles({
      ml: {
        margin: theme.spacing(0.4),
      }
  }),
  );
    const { query }  = useRouter()
    const router = useRouter() 
    const slug = query.post as string
    console.log(slug)
    const {firstpost}  = useFirstPost(slug)
    const  { posts } = usePosts(2)
    const classes = useStyles()
    return (
        <div className={styles.boxPost}>
        <div className={styles.boxPositonStyle}>
        {firstpost.map((value, index) => {
          return(
            <div className={styles.boxGetComponent} key={index}>
                
              <h1>{value.title}</h1>
              <img src={value.imagem == 'undefined' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Item_sem_imagem.svg/1280px-Item_sem_imagem.svg.png' : value.imagem } alt=''/>
              <span><strong>Category</strong>: {value.categoria}<div className={classes.ml}/> <strong>Date</strong>: {value?.date} </span>
              <p>
              {value.body}     
              </p>
            </div>
            )
             })}
            <div className={styles.BoxAnunciosGetComponent}>
                <h2>Posts Relacionados</h2>
            {posts.map((value, index) =>{
              return(
                <Card className={styles.mb} key={index}>
                <CardMedia
                  component="img"
                  width="160"
                  alt={value.categoria}
                  height="160"
                  image={value.imagem == "undefined" ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Item_sem_imagem.svg/1280px-Item_sem_imagem.svg.png' : value.imagem }
                />
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {value.title}
                  </Typography>
                <Typography  color="textSecondary">
                  {value.date}
                </Typography>
              <Typography variant="body2" component="p">
                 {value.body} ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => router.push(`../post/${value.id}`)}>Learn More</Button>
            </CardActions>
          </Card>
              )
          })}
            </div>
        </div>
      </div>
      
    );
}