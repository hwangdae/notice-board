import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';


const Main = () => {
    const navigate = useNavigate()
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid)
        } else {
        }
    });

    const logoutButtonHandler = async() => {
        try{
            await signOut(auth)
            alert('로그아웃')
        }catch(error){
            alert(error)
        }
        
    }

    return (
        <>
            {user === null ? <>
            <button onClick={logoutButtonHandler}>로그아웃</button>
                <button onClick={() => navigate("/Join")}>마이페이지</button></> : 
                <>
                <button onClick={() => navigate("/Login")}>로그인</button>
                <button onClick={() => navigate("/Join")}>회원가입</button>
                </> }

        </>

    )
}

export default Main