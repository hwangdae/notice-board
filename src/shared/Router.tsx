import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Main from '../pages/Main'
import Login from '../pages/Login'
import Join from '../pages/Join'
import { GlobalStyle } from '../styles/GlobalStyle'
import { GlobalFont } from '../styles/GlobalFont'

const Router = () => {
  return (
    <>
    <GlobalStyle/>
    <GlobalFont/>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Join' element={<Join/>}/>
    </Routes>
    </>
  )
}

export default Router