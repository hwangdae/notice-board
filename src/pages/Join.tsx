import React, { ChangeEvent, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Join = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")

    const navigate = useNavigate()


    console.log(auth)

    const emailValidation = async() => {
        
    }

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const checkPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckPassword(e.target.value)
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

            <p>아이디<input value={email} onChange={emailHandler}></input><button>중복확인</button></p>
            <p>비밀번호<input type='password' value={password} onChange={passwordHandler}></input></p>
            <p>비밀번호 확인<input type='password' value={checkPassword} onChange={checkPasswordHandler}></input></p>
            <button onClick={joinButtonHandler}>회원가입 완료</button>


        </>
    )
}

export default Join