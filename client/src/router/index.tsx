import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SessionHOC from "components/HOC/session";

const Home = lazy(() => import("pages/home"));
const Sign = lazy(() => import("pages/sign"));
const Admin = lazy(() => import("pages/admin"));

export interface IProps {}
const Root: React.FC<IProps> = () => {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign">
            <Sign />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
export default SessionHOC(Root);
