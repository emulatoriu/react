import Navbar from "@/app/components/organisms/navbar";
import getPosts from "@/app/repository/posts";
import React from "react";

export default function Post({ params }) {
    const { id } = React.use(params)
    const posts = getPosts()

    const post = posts.find((post) => post.id === id);

    return post ? (
        <div>
            <Navbar />
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    ) : <p>Loading...</p>;
}