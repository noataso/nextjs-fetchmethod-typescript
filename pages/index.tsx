import { type } from 'os';
import { ChangeEvent, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  // const [isShow,setIsShow]=useState(true);
  const [number,setNumber]=useState<number>(1);
  type post={
    userId:number,
    id:number,
    title:string,
    body:string,
  }
  const [post,setPost]=useState<post[]>([]);
  const handleClick=(e:any)=>{
    const targetNumber=e.target.textContent;
    setNumber(targetNumber);
  }
  const handlePrev=()=>{
    if(number===1){
      setNumber((number)=>number)
      return;
    }
    setNumber((number)=>number-1)
  }
  const handleNext=()=>{
    if(number===100){
      setNumber((number)=>number)
      return;
    }
    setNumber((number)=>number+1)
  }
  const handleFirst=()=>{
    setNumber(number=>1)
  }
  const handleEnd=()=>{
    setNumber(number=>100)
  }
  const [isShow0,setIsShow0]=useState<boolean>(true);
  const [isShow1,setIsShow1]=useState<boolean>(true);
  const [isShow2,setIsShow2]=useState<boolean>(true);
  const [isShow3,setIsShow3]=useState<boolean>(true);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${number}`,{method:"GET"})
    .then(res=>res.json())
    .then(data=>setPost(data))
    if(number>97){
      setIsShow3((isShow3)=>false);
      setIsShow2((isShow2)=>true);
      setIsShow1((isShow1)=>true);
    }
    if(number>98){
      setIsShow3((isShow3)=>false);
      setIsShow2((isShow2)=>false);
      setIsShow1((isShow1)=>true);
    }
    if(number>99){
      setIsShow3((isShow3)=>false);
      setIsShow2((isShow2)=>false);
      setIsShow1((isShow1)=>false);
    }
    else{
      setIsShow3((isShow3)=>true);
      setIsShow2((isShow2)=>true);
      setIsShow1((isShow1)=>true);
    }
  },[number])

  return (
    <div className={styles.container}>
      <h1>{post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className={styles.buttons}>
        <button onClick={handleFirst}>⇐</button>
        <button onClick={handlePrev}>←</button>
        {isShow0? <button onClick={handleClick}>{number}</button>:null}
        {isShow1? <button onClick={handleClick}>{number+1}</button>:null}
        {isShow2? <button onClick={handleClick}>{number+2}</button>:null}
        {isShow3? <button onClick={handleClick}>{number+3}</button>:null}
        <button onClick={handleNext}>→</button>
        <button onClick={handleEnd}>⇒</button>
      </div>
    </div>
  )
}
