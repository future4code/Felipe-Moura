import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ListTripPage from "../pages/ListTripsPage/ListTripPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/list">
            <ListTripPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
