import React, { ChangeEvent, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Join = () => {
    const [email, setEmail] = useState("")
    const [nickName, setNickName] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")

    const navigate = useNavigate()
    const auth = getAuth()
    console.log(auth)
    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const nickNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNickName(e.target.value)
    }
    const checkPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckPassword(e.target.value)
    }
    const emailValidationButton = async (e: React.MouseEvent) => {
        e.preventDefault()
        try {
            const validationEmail = await fetchSignInMethodsForEmail(auth, email)
            if (validationEmail.length > 0) {
                alert("이미 사용중인 이메일")
            } else {
                alert("사용가능 이메일")
            }
            console.log(validationEmail)
        } catch (error) {
            console.log(error)
        }

    }
    const joinButtonHandler = async (e: React.MouseEvent) => {
        e.preventDefault()
        try {

            if(password !== checkPassword){
                alert('비밀번호가 일치하지 않습니다.')
                return;
            }
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredential)
            const uid = userCredential.user.uid
            const userToken = await auth.currentUser?.getIdToken(true);
            await addDoc(collection(db, "users"), { uid, email, nickName })
            localStorage.setItem("user",userToken!)
            console.log(userToken)
            alert('회원가입이 완료되었습니다')
            navigate('/')
        } catch (error: any) {
            if (error.code === 'auth/missing-password') {
                alert('잘못된 이메일 형식')
            } else if(error.code === 'auth/email-already-in-use'){
                alert('이미 사용중인 이메일')
            } else if(error.code === 'auth/weak-password'){
                alert('6자 이상의 비밀번호 입력')
            }else {
                alert(error.code)
            }
        }

    }

    return (
        <>
            <form >
                <label>아이디</label>
                <input type='text' value={email} onChange={emailHandler}></input>
                <button onClick={emailValidationButton}>중복확인</button>
            </form>
            <label>닉네임</label><input type='text' value={nickName} onChange={nickNameHandler}></input>

            <label>비밀번호</label><input type='password' value={password} onChange={passwordHandler}></input>
            <label>비밀번호 확인</label><input type='password' value={checkPassword} onChange={checkPasswordHandler}></input>
            <button onClick={joinButtonHandler}>회원가입 완료</button>
        </>
    )
}

export default Join