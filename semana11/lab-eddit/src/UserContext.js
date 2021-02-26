import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { goToFeedPage, goToLoginPage } from "./Coordinator";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [postsDetail, setPostDetail] = useState({});
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");
  const history = useHistory();

  const userLogout = useCallback(
    async function () {
      setData(null);
      setPosts([]);
      setLogin(false);
      setLoading(false);
      setError(null);
      setToken(window.localStorage.removeItem("token"));
      <Link to="/login" />;
    },
    [history]
  );

  async function getPost(token) {
    await axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setPosts(res.data.posts);
        // setLogin(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function getPostDetail(token, id) {
    await axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setPostDetail(res.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function userLogin(body) {
    setError(null);
    setLoading(true);
    await axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login",
        body
      )
      .then((res) => {
        console.log(res);
        setToken(window.localStorage.setItem("token", res.data.token));
        setLoading(false);
        setLogin(true);
        setData(res.data.user);
        getPost(window.localStorage.getItem("token"));
        goToFeedPage(history);
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  async function createComment(body, id, token) {
    await axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment`,
        body,
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // async function autoLogin() {

  //   if (data) {
  //     goToFeedPage(history);
  //   } else {
  //     goToLoginPage(history);
  //   }
  // }

  // useEffect(() =>{
  //   autoLogin()
  // },[])

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        getPostDetail,
        createComment,
        postsDetail,
        loading,
        data,
        login,
        posts,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
