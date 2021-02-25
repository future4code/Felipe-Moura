import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goToFeedPage, goToLoginPage } from "./Coordinator";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const userLogout = useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      goToLoginPage(history);
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
        console.log(res)
        setPosts(res.data.posts);
        // setLogin(true);
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
        window.localStorage.setItem("token", res.data.token);
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

  async function autoLogin() {
    const token = window.localStorage.getItem("token");
    if (token) {
      goToFeedPage(history);
    } else {
      goToLoginPage(history);
    }
  }
  useEffect(() =>{
    autoLogin()
  },[])
  
  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, autoLogin, loading, data, login, posts }}
    >
      {children}
    </UserContext.Provider>
  );
};
