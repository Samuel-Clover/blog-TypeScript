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
    body: string;
    date:Object;
    categoria:string;
}>
export function usePosts(limit?: number , orderby?: string, id_document?: string) {
const [posts, setPosts] = useState<PostsType[]>([])
useEffect(() => {
    firestore.collection("posts").limit(limit).get().then((querySnapshot) => {
          const databasePosts = querySnapshot.docs.map((value, key) =>  {
            const date = value.data().date.toDate() as FirebasePosts
            const id = value.id as unknown as FirebasePosts
            const {title, categoria, body, image}  = value.data() as FirebasePosts
            return {
              id: id,
              title: title,
              body: body.toString().substring(0, 25),
              categoria:categoria,
              imagem:image,
              date:date.toLocaleString().substring(0, 10)
  
            }
          })
          setPosts(databasePosts)
    });
  }, [id_document, limit, orderby])

  return { posts, setPosts }
}