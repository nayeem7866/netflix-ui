
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig=
{
  apiKey: "AIzaSyBF5ufsoq6FB22gY8Fme-GcIcx7Ig7C_mw",
  authDomain: "react-netflix-clone-71edd.firebaseapp.com",
  projectId: "react-netflix-clone-71edd",
  storageBucket: "react-netflix-clone-71edd.appspot.com",
  messagingSenderId: "623606019654",
  appId: "1:623606019654:web:d996ced3dbe3a0e8363c47",
  measurementId: "G-RD50ZCFN91"
};


const app = initializeApp(firebaseConfig);
 
export const firebaseAuth=getAuth(app);