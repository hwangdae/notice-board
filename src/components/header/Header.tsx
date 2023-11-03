import styled from "styled-components";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Join from "../../pages/Join";
import Login from "../../pages/Login";
import { auth } from "../../firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
    }
  });

  const logoutButtonHandler = async () => {
    try {
      await signOut(auth);
      alert("로그아웃");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <S.HeaderWrap>
      <S.HeaderInner>
        <S.LogoContainer>
          <S.Logo>BORD</S.Logo>
        </S.LogoContainer>
        <S.LogContainer>
        {user !== null ? (
          <>
            <button onClick={logoutButtonHandler}>로그아웃</button>
            <button onClick={() => navigate("/Join")}>마이페이지</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/Login")}>로그인</button>
            <button onClick={() => navigate("/Join")}>회원가입</button>
          </>
        )}
        </S.LogContainer>
      </S.HeaderInner>
    </S.HeaderWrap>
  );
};

export default Header;

const S = {
  HeaderWrap: styled.div`
    background-color: red;
  `,
  HeaderInner: styled.div`
    width: 1200px;
    margin: 0 auto;
  `,
  LogoContainer: styled.div`
    
  `,
  Logo:styled.h1`
    
  `,
  LogContainer:styled.div`
    
  `
};
