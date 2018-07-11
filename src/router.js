import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login';
import Main from './routes/Main';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Login" exact component={Login}/>
        <Route path='/Main' exact component={Main}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
