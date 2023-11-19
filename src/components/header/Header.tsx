import styled from "styled-components";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Join from "../../pages/Join";
import Login from "../../pages/Login";
import { auth } from "../../firebase";
import { FlexBoxCenter } from "../../styles/StyleBox";



const Header = () => {
  const navigate = useNavigate();

  const user = auth.currentUser;
  const userToken = localStorage.getItem("user")

 
            


  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
    }
  });

  const logoutButtonHandler = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user")
      alert("로그아웃");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <S.HeaderWrap>
      <S.HeaderInner>
        <S.LogoContainer>
          <S.Logo onClick={()=>navigate('/')}>NoticeBord</S.Logo>
        </S.LogoContainer>
        <S.LogContainer>
          {userToken ? (
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
  box-shadow: 1px 0px 4px rgba(0,0,0,0.2);
  `,
  HeaderInner: styled(FlexBoxCenter)`
    width: 1200px;
    margin: 0 auto;
    padding: 15px 0px;
  `,
  LogoContainer: styled.div`
    
  `,
  Logo: styled.h1`
      @font-face {
    font-family: 'HakgyoansimGaeulsopungB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimGaeulsopungB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
    cursor: pointer;
    font-family: 'HakgyoansimGaeulsopungB' !important;
    font-size: 36px;

  `,
  LogContainer: styled.div`
  button{
    cursor: pointer;
    font-size: 15px;
    border: none;
    background: none;
  }
  `
};
