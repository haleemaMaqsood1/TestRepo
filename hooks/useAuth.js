import React, {useEffect,useState} from "react";
import {onAuthStateChanged} from 'firebase/auth';

import { View } from "react-native";
import {auth} from '../FirebaseConfig';
export default function setAuth(){
    const [user,setUser]= useState(null);

    useEffect(()=>{
        const unsub= onAuthStateChanged(auth,user=>{
        console.log("Got user: ",user);
        if(user){
            setUser(user)
        }else{
            setUser(null);
        }

    });
        return unsub;
    
   
},[]);
 return(user);
}