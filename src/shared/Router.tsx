import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Join from "../pages/Join";
import { GlobalStyle } from "../styles/GlobalStyle";
import { GlobalFont } from "../styles/GlobalFont";
import WritePost from "../pages/WritePost";
import Header from "../components/header/Header";
import Layout from "../layout/Layout";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalFont />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/WritePost" element={<WritePost />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
