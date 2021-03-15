import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PostFeed from "../Components/Posts/PostFeed";
import PostNew from "../Components/Posts/PostNew";
import { goToLoginPage } from "../Coordinator";
import { UserContext } from "../UserContext";

function Feed() {
  const { posts, data } = useContext(UserContext);
  //id, text, text, userVoteDirection, userName, votesCount
  console.log(posts)

  const history = useHistory()
  useEffect(() =>{
    
  },[posts])

  return (
    <div>
    {data ? 
    <div>    
     <PostNew /> {posts &&   posts.map((post) => (
       <PostFeed key={post.id} id={post.id} text={post.text} title={post.title} username={post.username} userVoteDirection={post.userVoteDirection} votesCount={post.votesCount}/>
       ))}
    </div>
      : goToLoginPage(history)}
     </div>
     );
}

export default Feed;
