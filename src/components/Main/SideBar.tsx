import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai/react'
import styled from 'styled-components'
import { categoryItem } from '../../globalState/Jotai'

const category = ["All Posts","Category One", "Category Two", "Category Three", "Category Four"]

const SideBar = () => {

  const [, setCategorySelect] = useAtom(categoryItem)

  const navigate = useNavigate()

  const categoryButtonHandler = (item: string) => {
    setCategorySelect(item)
  }
  return (
    <S.SideBarWrap>
      <S.SideBarInner>
        <S.WriteButtonWrap>
          <button onClick={() => navigate("/WritePost")}>글 작성하기</button>
        </S.WriteButtonWrap>
        <S.CategoryWrap>
          <S.CategoryInner>{category.map((item) => {
            return <li><button onClick={() => categoryButtonHandler(item)}>{item}</button></li>
          })}
          </S.CategoryInner>
        </S.CategoryWrap>
      </S.SideBarInner>
    </S.SideBarWrap>
  )
}

export default SideBar

const S = {
  SideBarWrap: styled.div`
    width: 20%;
  `,
  SideBarInner: styled.div`
    width: 100%;
   
  `,
  WriteButtonWrap: styled.div`
     button{
      cursor: pointer;
      width: 100%;
      background: #df78df;
      border: none;
      border-radius: 4px;
      padding: 10px 0px;
      font-size: 16px;
      color: white;
    }
    margin-bottom: 15px;
  `,
  CategoryWrap: styled.div`
    
  `,
  CategoryInner: styled.ul`
    background-color: #8f8989;
    border-radius: 4px;
    padding: 8px 5px;
    li{
      font-size: 16px;
      letter-spacing: -.5px;

 
      
      button{
        cursor: pointer;
        padding: 10px 4px;
        width: 100%;
        border-radius: 4px;
        border: none;
        background: none;
        &:hover{
        background-color: #000000;
        color: white;
      }
      }
    }
  `
}