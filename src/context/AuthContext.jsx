import React,{useState,useContext,createContext, useEffect} from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firbase";
const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // SignIn
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider)

    }


    // LogOut 
    const logout = () => signOut(auth)

    // Getting the user
    useEffect(()=> {
         const unsubscribe = onAuthStateChanged( auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
         })
         
         return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser,googleSignIn,logout}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}