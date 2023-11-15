import { collection, getDoc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import styled from 'styled-components'
import { db } from '../../firebase'
import { categoryItem } from '../../globalState/Jotai'

interface PostsType {
  id: string,
  category: string,
  title: string,
  createAt: string,
  content: string,
}


const Post = () => {

  const [posts, setPosts] = useState<PostsType[]>([])
  const [categoryselect, setCategoryselect] = useAtom(categoryItem)

  const fetchPosts = async () => {
    const q = query(collection(db, "post"), orderBy("createAt"));
    const querySnapshot = await getDocs(q);
    const fetchedposts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    setPosts(fetchedposts as PostsType[])
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  console.log(categoryselect)





  return (
    <S.SectionWrap>
      <S.SectionInner>{categoryselect !== null && categoryselect !== "All Posts" ? <>{posts.filter((post) => {
        return categoryselect === post.category
      }).map((post) => {
        return <S.SectionPostWrap key={post.id}>
          <S.SectionPostInner>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </S.SectionPostInner>
        </S.SectionPostWrap>
      })}</> : <>{posts.map((post) => {
        return <S.SectionPostWrap key={post.id}>
          <S.SectionPostInner>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </S.SectionPostInner>
        </S.SectionPostWrap>
      })}</>}</S.SectionInner>
    </S.SectionWrap>
  )
}

export default Post

const S = {
  SectionWrap: styled.section`
    width: 80%;
    background-color: white;
  `,

  SectionInner: styled.div`
    margin-left: 20px;
  `,

  SectionPostWrap: styled.div`
    background-color: white;
    
  `,
  SectionPostInner: styled.div`
    border: solid 1px #000;
    padding: 10px;
  `
}