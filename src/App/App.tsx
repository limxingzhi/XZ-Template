import React, { useState } from "react";
import "antd/dist/antd.less";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { history } from "../utils";
import {
  Layout
} from '../components';

import {
  DemoPage,
  DemoTwoPage,
} from '../pages';

import {
  tabConfig,
} from './navConfig';

const App = () => {
  const [currentTab, setCurrentTab] = useState('');
  const changeCurrentTab = (tabKey: string) => () => {
    setCurrentTab(tabKey);
  }
  return (
    <>
      <Layout branding="Xing Zhi's Template" tabItems={tabConfig} currentTab={currentTab}>
        <Router history={history}>
          <Switch>
            <Route path="/one">
              <DemoPage callback={changeCurrentTab('one')} />
            </Route>
            <Route path="/two">
              <DemoTwoPage callback={changeCurrentTab('two')} />
            </Route>
            <Route exact path="/">
              <Redirect to="/one" />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </>
  );
};

export default App;
