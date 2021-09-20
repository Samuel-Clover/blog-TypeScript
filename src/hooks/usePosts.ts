import React, { FormEvent, useEffect, useState } from 'react';
import { firestore } from '../server/firebaseConect';
type PostsType = {
    id: string | {};
    title: string | {};
    body: string | {};
    date:Object;
    imagem: string | {} | any;
    categoria:string | any;
  }
type FirebasePosts = Record<string,{
    title: string;
    body1: string;
    date:Object;
    categoria:string;
    image: string;
}>
export function usePosts(limit?: number , orderby?: string, id_document?: string) {
const [posts, setPosts] = useState<PostsType[]>([])
useEffect(() => {
    firestore.collection("posts").limit(limit).get().then((querySnapshot) => {
          const databasePosts = querySnapshot.docs.map((value, key) =>  {
            const date = value.data().date.toDate() as FirebasePosts
            const id = value.id as unknown as FirebasePosts
            const {body, categoria } = value.data() as FirebasePosts
            const { body1, title, image } = body
            console.log(body)
            return {
              id: id,
              body:body1.toString().substring(0, 15),
              title: title,
              imagem: image,
              categoria:categoria,
              date:date.toLocaleString().substring(0, 10)
  
            }
          })
          setPosts(databasePosts)
          console.log(databasePosts)
    });
  }, [id_document, limit, orderby])

  return { posts, setPosts }
}