import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
    </>
  );
};

export default Layout;

const S = {
  Container: styled.div`
    background-color: #ededed;
  `
}
