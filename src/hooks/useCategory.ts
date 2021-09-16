import { useEffect, useState } from "react";
import { firestore } from "../server/firebaseConect";
type FirebaseCategory = Record<string, {
  category: string;
  date: number;
}>



type CategoryType= {
  id:string;
  category:string | {} | any;
  date: number  | {};
}

export function useCategory(){
const [categoria, setCategoria] = useState<CategoryType[]>([])
useEffect(() => {
    firestore.collection("categoria").get().then((querySnapshot) => {
          const databaseCategory = querySnapshot.docs.map(value => {
          const { categoria, date } = value.data() as FirebaseCategory
          const idCategory = value.id as string
          return {
            id: idCategory,
            category: categoria,
            date: date
          }
          })
          setCategoria(databaseCategory)
    });
  }, [])
   return {setCategoria,  categoria}
}