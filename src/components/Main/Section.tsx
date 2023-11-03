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
        margin-top: 20px;
    `,
    SectionInner: styled(FlexBoxCenter)`
       width : 1200px;
       margin: 0 auto;

    `
}