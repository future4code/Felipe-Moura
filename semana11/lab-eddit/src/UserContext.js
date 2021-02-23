import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { goToFeedPage, goToHome } from "./Coordinator";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

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
        setData(res.data.user);
        goToHome();
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <UserContext.Provider value={{ userLogin, loading, data }}>
      {children}
    </UserContext.Provider>
  );
};
