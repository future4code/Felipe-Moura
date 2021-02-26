import axios from "axios";
import React, { useContext } from "react";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { FormNewPost } from "./PostNewStyled";

function PostNew() {
  const title = useForm();
  const message = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      text: message.value,
      title: title.value,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
        body,
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <FormNewPost onSubmit={handleSubmit}>
      <Input label="Titulo" name="title" type="text" {...title} />
      <Input label="mensagem" name="message" type="text" {...message} />
      <>
        <Button>Enviar</Button>
      </>
    </FormNewPost>
  );
}

export default PostNew;
