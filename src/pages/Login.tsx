import React, { ChangeEvent, useState } from 'react'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const loginButtonHandler = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        }catch(error){
            console.log(error)
        }
        
    }
    return (
        <form onSubmit={loginButtonHandler}>
            <input value={email} onChange={emailChangeHandler}></input>
            <input value={password} onChange={passwordChangeHandler}></input>
            <button>로그인</button>
        </form>
    )
}

export default Login