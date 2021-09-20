/* eslint-disable react-hooks/rules-of-hooks */
import React, { FormEvent, useState } from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { makeStyles} from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TextField from '@material-ui/core/TextField';
import { firestore, storage } from '../server/firebaseConect';
import { useCategory } from '../hooks/useCategory';
import { useAuth } from '../hooks/useAuth';

const drawerWidth = 300;
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    roottwo: {
      display: 'flex',
      marginBottom: '20px',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: '20px',
    },
    BoxPosts: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '700px',
      margin: '100px auto',
      lineHeight: '40px',
      boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      padding: '10px',
    },
    mb: {
      marginBottom: '20px',
    },
    input: {
      display: 'none',
    },
  }),
);
export default function pageAdmin () {
  const [NewBody, setNewBody] = useState({
   title: '',
   body: '' 
  })
  const [newcategoria, setNewCategoria] = useState('')
  const [selectFile, setSelectedFile] = useState('' || undefined)
  const {categoria} = useCategory()
  const { user } = useAuth()
  
  const changeHandler = (event: undefined | any) => {
		setSelectedFile(event.target.files[0]);
	}
 const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  setNewCategoria(event.target.value as string)
 }

 const OnChangeBody = (event) => {
   const {name, value } = event.target 
    setNewBody({...NewBody, [name]: value})
 }
  
   function AddNewCategory(event: FormEvent) {
    event.preventDefault()
    if(newcategoria.trim() === ""){
      return;
    }
    if(window.confirm('Cadastrado com sucesso')){
      firestore.collection('categoria').doc().set({
        categoria: newcategoria,
        date: new Date()
      })
    }
    setNewCategoria('')
   }
   async function AddNewPost(event: FormEvent) {
     
    event.preventDefault()
    if(NewBody.title.trim() === "" || NewBody.body.trim() === "" || newcategoria.trim() === ""){
      return;
    }
    if(selectFile == undefined){
      window.confirm('deseja fazer um post sem imagem mesmo ?')
      firestore.collection('posts').doc().set({
        body: {
          title: NewBody.title,
          body: NewBody.body,
          image:'undefined',
        },
        categoria: newcategoria,
        date: new Date()
      })
      
    }else{
    if(window.confirm('Cadastrado com sucesso')){
      await storage.ref("imagepost/"+selectFile.name).put(selectFile)
      storage.ref("imagepost/"+selectFile.name).getDownloadURL().then((link) => {
        firestore.collection('posts').doc().set({
          body: {
            title: NewBody.title,
            body: NewBody.body,
            image:link,
          },
          categoria: newcategoria,
          date: new Date()
        })
      })
    }
      
    }
  }
  const classes = useStyles();
  if(user?.name === process.env.AUTH_ADMINISTRATOR){
    return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" noWrap>
                Clipped drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
            <Divider />
              <List>
                  <ListItem button>
                    <ListItemIcon><DashboardIcon/></ListItemIcon>
                    <ListItemText primary={'Dashboard'} />
                  </ListItem>
              </List>
            </div>
          </Drawer>
          <main className={classes.content}>
            <Toolbar />
            <form className={classes.BoxPosts} onSubmit={AddNewPost} noValidate autoComplete="off">
              <label>Formulario de Posts</label>
              <TextField id="standard-basic" label="title-post" className={classes.mb}  name="title"
                onChange={OnChangeBody} />
              <TextField
                label="Body-Post"
                className={classes.mb}
                multiline
                rows={4}
                variant="outlined"
                name="body"
                onChange={OnChangeBody}
              />
              <FormControl className={classes.mb}>
                <InputLabel htmlFor="grouped-select">Categoria-Posts</InputLabel>
                <Select defaultValue='' id="grouped-select"
                    value={newcategoria}
                    onChange={handleChange}>
                  {categoria.map((values, index) => {
                     return(
                        <MenuItem key={index} value={values.category}>{values.category}</MenuItem>
                     )                     
                  })}
                </Select>
              </FormControl>
              <div className={classes.roottwo}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={changeHandler}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload
                  </Button>
                </label>
              </div>
              <Button type="submit" variant="outlined">Enviar</Button>
            </form>
            
            
            
            
            <form className={classes.BoxPosts} noValidate autoComplete="off" onSubmit={AddNewCategory}>
              <label>Add Categorias de Posts</label>
              <TextField id="standard-basic" label="Categoria" value={newcategoria} onChange={(event) => setNewCategoria(event.target.value)} className={classes.mb} />
              <Button type="submit" variant="outlined">Enviar</Button>
            </form>
          </main>
        </div>
    );
  }else {
    return(
      <h1>Voce não pode acessar essa pagina</h1>
    );
  }
}
