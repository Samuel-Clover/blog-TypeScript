import React from 'react'
import styles from '../BoxSecondary/boxsecondary.module.css';
import Link from 'next/link'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import { useRouter } from 'next/router';
import { usePosts } from '../../hooks/usePosts';


export default function BoxSingle() {
  const router = useRouter()
  const { posts } = usePosts(3)
    return (
      <div className={styles.boxSingle}>
        <h3>Posts Em alta</h3>
        <div className={styles.boxPosition}>
        {posts.map((value, index) => {
            return(
            <Card className={styles.boxCard} key={index}>
              <CardMedia
                component="img"
                width="150"
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
            <Button size="small" onClick={() => router.push(`post/${value.id}`)}>Learn More</Button>
          </CardActions>
        </Card>
        )
        })
        }

        </div>
      </div>
    );
}