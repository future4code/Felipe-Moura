import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import LoginCreate from "./Components/Login/LoginCreate";
import LoginForm from "./Components/Login/LoginForm";
import Feed from "./Feed/Feed";
import { UserStorage } from "./UserContext";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/create">
              <LoginCreate />
            </Route>
            <Route exact path="/feed">
              <Feed />
            </Route>
          </Switch>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default Router;
