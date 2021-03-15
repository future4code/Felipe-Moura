import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { PostComments } from "./PostComments";
import { PostDetailContainer, PostInfo, PostTitle } from "./PostDetailStyles";

function PostDetail() {
  const { data, getPostDetail, postsDetail, createComment } = useContext(
    UserContext
  );
  const { id } = useParams();
  const token = window.localStorage.getItem("token");

  const { title, text, commentsCount, comments } = postsDetail;
  const comentario = useForm();

  // console.log(postsDetail);
  useEffect(() => {
    getPostDetail(token, id);
  }, [postsDetail]);

  const handleClick = () => {
    const body = {
      text: comentario.value,
    };

    createComment(body, id, token);
  };

  return (
    <>
      {data ? (
        <div>
          {postsDetail ? (
            <PostDetailContainer>
              <PostInfo>
                <PostTitle>{title}</PostTitle>
                <p>
                  <b>Post: </b> {text}{" "}
                </p>
                <p>Comentários: {commentsCount}</p>

                <Input
                  name="novo Comentário"
                  label="Novo Comentário"
                  type="text"
                  {...comentario}
                />
                <Button onClick={handleClick}>Enviar</Button>
              </PostInfo>
              <div>
                <PostComments comments={comments} />
              </div>
            </PostDetailContainer>
          ) : (
            <p> Não há dados</p>
          )}
        </div>
      ) : (
        <p>Nada Existe</p>
      )}
    </>
  );
}

export default PostDetail;
