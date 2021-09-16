import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { firebase,auth } from "../server/firebaseConect";
import { useRouter } from 'next/router'

type filterContextype = {
    busca: Object | undefined;
    setBusca: Dispatch<SetStateAction<any[]>>,
}
type filterContextProviderProps = {
  children: ReactNode;
}
export const Utilscontext = createContext({} as filterContextype)
export function UtilsContextProvider(props: filterContextProviderProps) {
  const [busca, setBusca] = useState<string[]>([])
    return (
        <Utilscontext.Provider value={{busca, setBusca}}>
          {props.children}
        </Utilscontext.Provider>
    ); 

} 