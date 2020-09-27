import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/home";
import Sign from "pages/sign";
import SessionHOC from "components/sessionHOC";

export interface IProps {}
const Root: React.FC<IProps> = (props) => {
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
export default SessionHOC(Root);
