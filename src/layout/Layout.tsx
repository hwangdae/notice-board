import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />
      <S.ContainerWrap>
        <S.ContainerInner>
        <Outlet />
        </S.ContainerInner>
      </S.ContainerWrap>
    </>
  );
};

export default Layout;

const S = {
  ContainerWrap: styled.div`
    background-color: #ededed;
  `,
  ContainerInner:styled.div`
    width: 1200px;
    margin: 0 auto;
  `
}
