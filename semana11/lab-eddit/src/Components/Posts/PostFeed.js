import React, { useEffect, useState } from "react";
import Button from "../Forms/Button";
import { ButtonLike, ContainerPost } from "./PostFeedStyles";
import { ReactComponent as Like } from "../../Assets/like.svg";
import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { goToPostDetailPage } from "../../Coordinator";

const PostFeed = ({
  text,
  title,
  username,
  userVoteDirection,
  votesCount,
  id,
}) => {

  const [votos, setVotos] = useState("");
  const history = useHistory();

  const handleClick = (id) => {
    const body = {
      direction: 1,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,
        body,

        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        setVotos(votesCount + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePostDetail = (id) => {
    goToPostDetailPage(history,id);
  };

  useEffect(() => {

  }, [votos]);

  return (
    <ContainerPost>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>Autor: {username}</p>
      <p>Voto: {userVoteDirection}</p>
      <p>{votos}</p>
      <ButtonLike onClick={() => handleClick(id)}>
        <Like />
      </ButtonLike>
      <Button onClick={() => handlePostDetail(id)}>Veja mais</Button>
    </ContainerPost>
  );
};

export default PostFeed;
