import router from "next/router";
import { useEffect, useState } from "react";
import { firebase,auth } from "../server/firebaseConect";
type User = {
  id:string,
  name:string,
  avatar:string,  
}
export function useAuth() {
const [user, setUser] = useState<User>();

  function verifyAccount(user: User | any) {
    if(user) {
      const { displayName, uid, photoURL} = user
      if(!displayName || !photoURL) {
        throw new Error('missing information Google Account');
      }
      setUser ({
        id:uid,
        name:displayName,
        avatar:photoURL,
  
      })
    }
  }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user)=> {
           verifyAccount(user)
        })
        return () => {
          unsubscribe()
        }
      }, [])
      async function signInWithGoogle () {
        const actionCodeSettings = {
          url: 'http://localhost:3000',
          // This must be true for email link sign-in.
          handleCodeInApp: true,
        }
      
        const provider = new firebase.auth.GoogleAuthProvider()
        const result = await auth.signInWithPopup(provider)
          verifyAccount(result.user)
          if(result.additionalUserInfo.isNewUser){
              result.user.sendEmailVerification(actionCodeSettings).then((link) => {
                    // Construct sign-in with email link template, embed the link and
                    // send using custom SMTP server.
                    
                    console.log('email enviado com sucesso', link);
              })
          }else {
            return result.user 
          }
        
       }
       
      async function LoggoutwidhGoogle() {
      await firebase.auth().signOut().then(() => {
          alert('usuario deslogado com sucesso')
          router.reload()
      })
       }
       return { user,  setUser, signInWithGoogle,LoggoutwidhGoogle}
      
} 