import { ref, set } from "firebase/database";
import React, { ChangeEvent, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";


const WritePost = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const writePostSubmit = async() => {
    await addDoc(collection(db, "post"), { title, content })
    alert("작성완료")
    setTitle("")
    setContent("")
  }
  return (
    <>

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
