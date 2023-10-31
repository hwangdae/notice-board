import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Main from '../pages/Main'
import Login from '../pages/Login'
import Join from '../pages/Join'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Join' element={<Join/>}/>
    </Routes>
    </>
  )
}

export default Router