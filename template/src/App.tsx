import React from "react";
import { MailOutlined } from '@ant-design/icons';
import "antd/dist/antd.less";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { history } from "./utils";
import {
  Nav
} from './components';

import type {
  NavConfig
} from './components';

import {
  DemoPage,
  DemoTwoPage,
} from './pages';

const menuConfig: Array<NavConfig> = [
  { key: 'one', title: 'Click Me', path: './one' },
  { key: 'two', title: 'Click Me Also', path: './two', icon: <MailOutlined /> },
  { key: 'three', title: 'external', externalPath: true, path: 'https://google.com' },
];

const App = () => {
  return (
    <>
      <Nav config={menuConfig} currentTab={menuConfig[0].key} />
      <Router history={history}>
        <Switch>
          <Route path="/one">
            <DemoPage />
          </Route>
          <Route path="/two">
            <DemoTwoPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/one" />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
