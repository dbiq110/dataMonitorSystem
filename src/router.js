import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import FirstPage from "./routes/FirstPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/first" exact component={FirstPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
