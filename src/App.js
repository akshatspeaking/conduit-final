import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "./tailwind.output.css";
import Login from "./components/Login";
import HomePublic from "./components/HomePublic";
import FourOFour from "./components/FourOFour";
import HomePvt from "./components/HomePvt";
import Header from "./components/Header";

export default function App() {
  let [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <BrowserRouter>
      <Public />
    </BrowserRouter>
  );
}

function Public() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePublic} />
        <Route path="/login" exact component={Login} />
        <Route component={FourOFour} />
      </Switch>
    </>
  );
}

function Private() {
  return (
    <Switch>
      <Route path="/" exact component={HomePvt} />
      <Route component={FourOFour} />
    </Switch>
  );
}
