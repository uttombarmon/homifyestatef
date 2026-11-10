import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-auth/firebaseauthentication";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext({
  user: null,
  userInfo: null,
  loading: false,
  creatuserwithemail: async () => Promise.resolve(),
  signupWihtGoogle: async () => Promise.resolve(),
  signinWithEmailAndPassword: async () => Promise.resolve(),
  signout: async () => Promise.resolve(),
  signupWithFacebook: async () => Promise.resolve(),
  searchInfo: null,
  setSearchInfo: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [searchInfo, setSearchInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInfo, setInfo] = useState(null);
  //check user
  useEffect(() => {
    if (!auth) {
      setUser(null);
      setInfo(null);
      setLoading(false);
      return undefined;
    }

    const unSubscribe = onAuthStateChanged(auth, async (cuser) => {
      setUser(cuser);
      console.log(cuser);
      const email = cuser?.email;
      if (email) {
        await axios.post(
          "https://homifyestates.vercel.app/jwt/signIn",
          { email },
          { withCredentials: true },
        );
        const result = await axios.get(
          `https://homifyestates.vercel.app/users/${email}`,
          { withCredentials: true },
        );
        setInfo(result.data);
        console.log(result.data);
        if (!result.data.email) {
          signout()
            .then(() => {
              axios
                .post("https://homifyestates.vercel.app/jwt/clear-token", {
                  email: result?.data?.email,
                })
                .then(() => {
                  window.location.href = "/signin";
                });
            })
            .catch((err) => console.log(err));
        }
      }

      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  //signin by email and password
  const creatuserwithemail = (email, password) => {
    if (!auth) {
      return Promise.reject(
        new Error(
          "Firebase is not configured. Add your Vite env values first.",
        ),
      );
    }
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signin  by email and password
  const signinWithEmailAndPassword = (email, password) => {
    if (!auth) {
      return Promise.reject(
        new Error(
          "Firebase is not configured. Add your Vite env values first.",
        ),
      );
    }
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signin by google account
  const provider = auth ? new GoogleAuthProvider() : null;
  const signupWihtGoogle = () => {
    if (!auth || !provider) {
      return Promise.reject(
        new Error(
          "Firebase is not configured. Add your Vite env values first.",
        ),
      );
    }
    return signInWithPopup(auth, provider);
  };
  //signin by facebook account;
  const fbProvider = auth ? new FacebookAuthProvider() : null;
  const signupWithFacebook = () => {
    if (!auth || !fbProvider) {
      return Promise.reject(
        new Error(
          "Firebase is not configured. Add your Vite env values first.",
        ),
      );
    }
    return signInWithPopup(auth, fbProvider);
  };
  //signout
  const signout = () => {
    if (!auth) {
      return Promise.resolve();
    }
    return signOut(auth);
  };
  const globaldata = {
    user,
    userInfo,
    loading,
    creatuserwithemail,
    signupWihtGoogle,
    signinWithEmailAndPassword,
    signout,
    signupWithFacebook,
    searchInfo,
    setSearchInfo,
  };
  return (
    <AuthContext.Provider value={globaldata}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
