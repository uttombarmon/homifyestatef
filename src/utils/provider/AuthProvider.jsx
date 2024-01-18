import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-auth/firebaseauthentication";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    //check user
    useEffect(() => {
        const unSubcribe = () => {
            onAuthStateChanged(auth, cuser => {
                setUser(cuser)
                setLoading(false)
            })
        }
        return unSubcribe();
    }, [])
    //signin by email and password
    const creatuserwithemail = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signin  by email and password
    const signinWithEmailAndPassword=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // signin by google account
    const provider = new GoogleAuthProvider()
    const signupWihtGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const globaldata = {
        user, loading, creatuserwithemail,signupWihtGoogle,signinWithEmailAndPassword
    }
    return <AuthContext.Provider value={globaldata}> {children}</AuthContext.Provider>
};

export default AuthProvider;