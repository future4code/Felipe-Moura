import React, { useContext } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { goToHome, goToLoginPage } from "../Coordinator";
import Feed from "../Feed/Feed";
import { UserContext } from "../UserContext";

function ProtectedRoute(props) {
  const { login } = useContext(UserContext);
  const history = useHistory();

  if (login === true) {
    return <Redirect {...props} to="/feed"> <Feed/> </Redirect>;
  } else if (login === false) {
    return <Redirect to="/"/>;
  }
}

export default ProtectedRoute;
