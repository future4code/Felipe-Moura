import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApplicationTrip from "../pages/ApplicationTrip/ApplicationTrip";
import HomePage from "../pages/HomePage/HomePage";
import ListTripPage from "../pages/ListTripsPage/ListTripPage";
import ListTripPageAdm from "../pages/ListTripsPage/ListTripPageAdm";
import  LoginPage  from "../pages/LoginPage/LoginPage";
import TripDetail from "../pages/TripDetailsPage/TripDetails";

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
        <Route  exact path={"/details"}>
          <TripDetail />
        </Route>
        <Route exact path={"/application"}>
          <ApplicationTrip />
        </Route>
        <Route exact path="/admlisttrip">
          <ListTripPageAdm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
