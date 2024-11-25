"use client"
import Links from "@/app/components/organisms/links";
import Navbar from "@/app/components/organisms/navbar";
import PostLinks from "@/app/components/organisms/postlinks";
import getPosts from "@/app/repository/posts";
import Link from "next/link";
import React from "react";

export default function Post({params}) {
    const { id } = React.use(params)
    const posts = getPosts()
    
    const post = posts.find((post) => post.id === id);
    const postLinks = <Links posts={posts} />
    
    if (!post) {
        return <p>Loading...</p>;
    }
    return (
        <div>    
            <Navbar />                    
            <h1>{post.title}</h1>
            <p>{post.content}</p>            
        </div>
    );
}