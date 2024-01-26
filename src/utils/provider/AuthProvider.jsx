import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-auth/firebaseauthentication";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();
    //check user
    useEffect(() => {
        const unSubcribe = () => {
            onAuthStateChanged(auth, cuser => {
                setUser(cuser);
                setLoading(false);
            })
        }
        return () => {
            unSubcribe();
        };
    }, [axiosPublic]);

    //signin by email and password
    const creatuserwithemail = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signin  by email and password
    const signinWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signin by google account
    const provider = new GoogleAuthProvider()
    const signupWihtGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    //signin by facebook account; 
    const fbProvider = new FacebookAuthProvider();
    const signupWithFacebook = () => {
        return signInWithPopup(auth, fbProvider);
    }
    //signout
    const signout = () => {
        return signOut(auth);
    }
    const globaldata = {
        user,
         loading, creatuserwithemail, signupWihtGoogle, signinWithEmailAndPassword,
        signout,signupWithFacebook
    }
    return <AuthContext.Provider value={globaldata}> {children}</AuthContext.Provider>
};

export default AuthProvider;