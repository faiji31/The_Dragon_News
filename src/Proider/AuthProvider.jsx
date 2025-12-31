import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import app from "../Firebase/Firebase.config"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app);
const AuthProvider = ({children}) => {
      const [user,setUser] = useState(null)
      const [loading,setLoading] = useState(true)

      console.log(loading,user);

      const CreateUser = (email,password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
      }
      const updateUser = (updatedData)=>{
            return updateProfile(auth.currentUser, updatedData)

      }

      const LogOut =()=>{
            setLoading(true)
            return signOut(auth)
      }
      const Login=(email,password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
      }

      useEffect(()=>{
      const Unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
      })
      return ()=>{
            Unsubscribe();
      }

      },[])

      const AuthData = {
            user,
            setUser,
            CreateUser,
            LogOut,
            Login,
            loading,
            setLoading,
            updateUser,
      }
      return <AuthContext value={AuthData}>{children}</AuthContext> 
};

export default AuthProvider;