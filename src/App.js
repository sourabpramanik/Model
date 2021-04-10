import React, { Suspense } from "react";

import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Head from "./component/head";
import Body from "./component/body";
import history from './history'
export default function App() {
  return (
    <>
      <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Body} />
                    <Route path="/Head" component={Head} />
                </Switch>
      </Router>
    </>
  );
}