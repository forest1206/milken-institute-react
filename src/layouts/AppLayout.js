import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import routes from "../routes";

export default function AppLayout(props) {
  return (
    <>
      <Header />
      <Switch>
        {routes.map((route, key) => (
          <Route
            key={route}
            exact={true}
            path={route.path}
            name={route.name}
            component={route.component}
          />
        ))}
      </Switch>
      <Footer />
    </>
  );
}
