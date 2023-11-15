import { ref, set } from "firebase/database";
import React, { ChangeEvent, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const WritePost = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category,setCategory] = useState("Category One")

  console.log(category)

  const navigate = useNavigate()

  const writePostSubmit = async () => {
    await addDoc(collection(db, "post"), { title, content, createAt: new Date(),category })
    alert("작성완료")
    setTitle("")
    setContent("")
    navigate("/")
  }
  return (
    <>
      <select value={category} onChange={(e:ChangeEvent<HTMLSelectElement>)=>{setCategory(e.target.value)}}>
        <option>Category One</option>
        <option>Category Two</option>
        <option>Category Three</option>
        <option>Category Four</option>
      </select>
      <label>제목</label><input value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
      }}></input>
      <label>내용</label><input value={content} onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
      }}></input>
      <button onClick={writePostSubmit}>작성하기</button>
    </>
  );
};

export default WritePost;
