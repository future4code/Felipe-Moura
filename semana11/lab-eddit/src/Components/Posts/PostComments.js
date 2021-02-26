import React from "react";

export const PostComments = ({ comments }) => {
 

  return (
    <ul>
      {comments && comments.map((comment) => {
        return <li> {comment.text}</li>;
      })}
    </ul>
  );
};
