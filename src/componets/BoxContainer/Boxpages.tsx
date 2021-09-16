import React, { useContext, useState } from 'react'
import styles from '../BoxContainer/boxcontainer.module.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { usePosts } from '../../hooks/usePosts';
import { Utilscontext } from '../../Contexts/UtilsContext';
import Pagination from '@material-ui/lab/Pagination';
import { CardMedia, createStyles, makeStyles } from '@material-ui/core';
import router from 'next/router';
type TextProps = {
  text?: string;
  css?: string;
}

export default function BoxContainer (children : TextProps) {
 
  const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(4),
        display: 'flex',
        justifyContent:'center',
        margin: theme.spacing(1),
      },
    }
  }),
);
      const { posts } = usePosts()
      const { busca } = useContext(Utilscontext)
      /* filtro de busca */ 
      const result = posts.filter(({categoria}) => categoria.includes(busca))
        /* Pagination  */
       const [itensPorPage, setItemsPorPage] = useState(6)
       const [currentPage, setCurrentPage] = useState(1)
       const pages = Math.ceil(result.length / itensPorPage)
       const startIndex = (currentPage - 1) * itensPorPage
       const endIndex = startIndex + itensPorPage;
       const currentIntems = result.slice(startIndex, endIndex)
       /* Pega os valores e seta o currentPage */
        const handleChange = (event, value) => {
          setCurrentPage(value)
        }
    const classes = useStyles()
    return (
  
      <div className={styles.boxPages}>
        <h3>{children.text}</h3>
        <div className={styles.boxPosition}>
        {currentIntems.map((value, index) => {
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
      })}     
      </div>
        <div className={classes.root}>
        <Pagination
        count={pages}
        size="large"
        page={currentPage}
        defaultValue={currentPage}
        defaultPage={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
      
        </div>
      </div>

    );
}
