import React, { useContext } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { goToFeedPage, goToHome, goToLoginPage } from "../Coordinator";
import Feed from "../Feed/Feed";
import { UserContext } from "../UserContext";

function ProtectedRoute() {
  const { login } = useContext(UserContext);
  const history = useHistory();

  if (login === true) {
    return (

      goToFeedPage(history)
    );
  } else if (login === false) {
    return <Redirect to="/login" />;
  }
}

export default ProtectedRoute;
