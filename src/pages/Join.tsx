import React, { ChangeEvent, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
// import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Join = () => {
    const [email, setEmail] = useState("")
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
    const checkPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckPassword(e.target.value)
    }
    const emailValidationButton = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const validationEmail = await fetchSignInMethodsForEmail(auth,email)
            if (validationEmail && validationEmail.length > 0) {
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
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            alert('회원가입이 완료되었습니다')
            navigate('/')
        } catch (error: any) {
            if (error.code === 'auth/missing-password') {
                alert('잘못된 이메일 형식')
            } else {
                alert(error.code)
            }
        }

    }

    return (
        <>
            <form onSubmit={emailValidationButton}>
                <label>아이디</label><input type='email' value={email} onChange={emailHandler}></input><button>중복확인</button>
            </form>
            <label>비밀번호</label><input type='password' value={password} onChange={passwordHandler}></input>
            <label>비밀번호 확인</label><input type='password' value={checkPassword} onChange={checkPasswordHandler}></input>
            <button onClick={joinButtonHandler}>회원가입 완료</button>
        </>
    )
}

export default Join