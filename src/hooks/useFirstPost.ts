import React, { FormEvent, useEffect, useState } from 'react';
import { firestore } from '../server/firebaseConect';
type PostsType = {
    title: string | {};
    body: string | {};
    date:Object;
    imagem: string | any;
    categoria:string | {};
  }
type FirebasePosts = Record<string,{
    title: string;
    body1: string;
    date:Object;
    image: string;
    categoria:string;
}>
export function useFirstPost(id_document?: string) {
const [firstpost, setfirstPost] = useState<PostsType[]>([])
useEffect(() => {
    const docRef = firestore.collection("posts").doc(id_document);
    docRef.get().then((doc) => {
            const date = doc.data()?.date.toDate() as FirebasePosts
            const {body, categoria} = doc?.data() as FirebasePosts
            const {title, body1, image} =body
            setfirstPost(
            [{
                title: title,
                date: date.toLocaleString().substring(0, 10),
                categoria:categoria,
                imagem:image,
                body: body1
            }])   
    }).catch((error) => {
        error
    });     
       
  }, [id_document])

  return { firstpost, setfirstPost}
}