import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/home";
import Sign from "pages/sign";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sign">
          <Sign />
        </Route>
      </Switch>
    </Router>
  );
};
export default Root;
