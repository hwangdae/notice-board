import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <S.SideBarWrap>
      <S.SideBarInner>
        <S.WriteButtonWrap>
          <button onClick={()=>navigate("/WritePost")}>글 작성하기</button>
        </S.WriteButtonWrap>
        <S.CategoryWrap>
          <S.CategoryInner>
            <li>Category one</li>
            <li>Category two</li>
            <li>Category three</li>
            <li>Category four</li>
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
  CategoryWrap:styled.div`
    
  `,
  CategoryInner:styled.ul`
    background-color: #ececec;
    border-radius: 4px;
    padding: 8px 5px;
    li{
      cursor: pointer;
      font-size: 16px;
      letter-spacing: -.5px;
      padding: 10px 4px;
      border-radius: 4px;
      &:hover{
        background-color: #000000;
        color: white;
      }
    }
  `
}