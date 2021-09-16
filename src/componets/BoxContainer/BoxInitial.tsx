import React from 'react'
import styles from '../BoxContainer/boxcontainer.module.css'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { usePosts } from '../../hooks/usePosts';
import {useRouter} from 'next/router'
import { CardActions, CardContent, CardMedia } from '@material-ui/core';
type TextProps = {
  text?: string;
  css?: string;
}

export default function BoxContainer (children : TextProps) {
  const router = useRouter()
  const { posts } = usePosts(3)
    return (
      <div className={styles.boxContainer}>
        <h3>{children.text}</h3>
        <div className={styles.boxPosition}>
          {posts.map((value, index) => {
            return(
            <Card className={styles.boxCard} key={index}>
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