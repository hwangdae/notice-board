import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import SideBar from './SideBar'
import { FlexBoxCenter } from '../../styles/StyleBox'

const Section = () => {
    return (

        <S.SectionWrap>
            <S.SectionInner>
                <SideBar />
                <Post />
            </S.SectionInner>
        </S.SectionWrap>

    )
}

export default Section

const S = {
    SectionWrap: styled.div`
        padding-top: 20px;
    `,
    SectionInner: styled.div`
       width : 1200px;
       display: flex;
       justify-content: space-between;
       margin: 0 auto;
    `
}