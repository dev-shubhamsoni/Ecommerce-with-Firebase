import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const userContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({children}) => {

    const {currentUser, setCurrentUser} = useState(null);
    const value = {currentUser, setCurrentUser}

    useEffect(()=>{
        const unsubcribe = onAuthStateChangedListener((user)=>{})
        return unsubcribe
    }, [])

    return <userContext.Provider value={value}>{children}</userContext.Provider>
}