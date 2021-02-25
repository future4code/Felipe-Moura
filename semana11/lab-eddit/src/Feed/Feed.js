import React, { useContext, useEffect } from "react";
import PostFeed from "../Components/Posts/PostFeed";
import PostNew from "../Components/Posts/PostNew";
import { UserContext } from "../UserContext";

function Feed() {
  const { posts } = useContext(UserContext);
  console.log(posts);
  //id, text, text, userVoteDirection, userName, votesCount

  useEffect(() =>{

  },[posts])

  return (
    <div>
      <PostNew />
      {posts &&
        posts.map((post) => (
          <PostFeed key={post.id} id={post.id} text={post.text} title={post.title} username={post.username} userVoteDirection={post.userVoteDirection} votesCount={post.votesCount}/>
          // <div key={post.id}>
           
          //   <h1>{post.title}</h1> <p>{post.text}</p>
          // </div>
        ))}
    </div>
  );
}

export default Feed;
