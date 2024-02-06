import React, { useState } from "react";
import styled from "styled-components";
import Backgroundimage from "../components/Backgroundimage";
import Header from "../components/Header";
import {  onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";


function Login() 
{
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState(""); 
    const navigate = useNavigate();

    const handleLogIn= async()=>
    {
       try {
         await signInWithEmailAndPassword(firebaseAuth,email,password);
       } catch (error) {
        console.log(error);
       }
    };
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/");
    });
    return(
    <Container>
        <Backgroundimage />
        <div className="content">
            <Header/>
            <div className="form-container flex column a-center j-center"> 
            <div className="form flex column a-center j-center">
                <div className="title">
                    <h3>Login</h3>
                </div>
                <div className="container flex column">
                
             <input type="text" placeholder="Email" 
             onChange={(e)=>setEmail(e.target.value)} 
             value={email} />

             <input type="password" placeholder="Password"  
             onChange={(e)=>setPassword(e.target.value)} 
             value={password} 
             />
             
             <button onClick={handleLogIn}>Login </button>
             

                </div>
            </div>
            </div>
        </div>
    </Container>
    );
    
}
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .form-container{
        gap:2rem;
        height:85vh;
        .form{
            padding:2rem;
            background-color:#000000b0;
            width:25vw;
            gap:2rem;
            color:white;
            .container{
                gap:2rem;
                input{
                    padding:0.5rem 1rem;
                    width:15rem;
                }
                button{
                    padding:0.5rem 1rem;
                    background-color:#e50914;
                    border:none;
                    cursor:pointer;
                    color:white;
                    border-radius:0.2rem;
                    font-weight:holder;
                    font-size:1.05rem;
                }
            }
        }
    }
  }
`;

export default Login;

