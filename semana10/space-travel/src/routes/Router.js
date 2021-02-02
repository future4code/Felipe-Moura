import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ListTripPage from "../pages/ListTripsPage/ListTripPage";
import  LoginPage  from "../pages/LoginPage/LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={"/list"}>
            <ListTripPage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
