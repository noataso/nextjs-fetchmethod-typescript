import Link from "next/link";
import { useRouter } from "next/router";
import { type } from "os";
import { useEffect, useState } from "react";



const Product = () => {
    const router=useRouter();
    const {id}:any=router.query;
    type post={
        useId:number,
        id:number,
        title:string,
        body:string,
    }
    const [post,setPost]=useState<post[]>([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:"GET"})
        .then(res=>res.json())
        .then(data=>setPost(data))
    })
    return (
        <div>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

export default Product;