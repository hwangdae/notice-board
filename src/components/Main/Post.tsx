import { collection, getDoc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../../firebase'

interface PostsType {
  id:string,
  title:string,
  content:string
}

const Post = () => {

  const [posts,setPosts] = useState<any[]>([])

  const fetchPosts = async () => {
    const q = query(collection(db,"post"));
    const querySnapshot = await getDocs(q);
    const fetchedposts = querySnapshot.docs.map((doc)=> ({
      id:doc.id,
      ...doc.data(),
    }))
    setPosts(fetchedposts)
  }

  useEffect(()=> {
    fetchPosts()
  },[])

  console.log(posts)


  
  
  return (
    <S.SectionWrap>{posts.map((post:PostsType)=>{
      return (
        <div key={post.id}>
        <p>{post.title}</p>
        <p>{post.content}</p></div>
      )
    })}</S.SectionWrap>
  )
}

export default Post

const S = {
  SectionWrap:styled.div`
    width: 80%;
  `
}