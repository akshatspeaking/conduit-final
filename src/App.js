import React, { useContext, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteProps,
  BrowserRouterProps,
} from "react-router-dom";
import "./App.css";
import "./tailwind.output.css";
import Login from "./components/Login";
import HomePublic from "./components/HomePublic";
import FourOFour from "./components/FourOFour";
import HomePvt from "./components/HomePvt";
import Header from "./components/Header";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const UserContext = React.createContext({});
  const user = useContext(UserContext);

  function Public() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePublic} />
          <Route
            path="/login"
            exact
            component={(setIsLoggedIn, BrowserRouterProps) => (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )}
          />
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

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        {isLoggedIn ? <Private /> : <Public />}
      </UserContext.Provider>
    </BrowserRouter>
  );
}
