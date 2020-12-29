import React, { useState } from "react";
import "antd/dist/antd.less";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import 'normalize.css';
import { history } from "../utils";
import { store } from '../redux/reduxCounter';
import {
  Layout,
  MySubMenu,
} from '../components';

import {
  DemoPage,
  CounterDemoPage,
} from '../pages';

import {
  tabConfig,
} from './tabConfig';

const App = () => {
  const [currentTab, setCurrentTab] = useState('');
  const changeCurrentTab = (tabKey: string) => () => {
    setCurrentTab(tabKey);
  }
  return (
    <>
      <Provider store={store}>
        <Layout
          branding="Xing Zhi's Template"
          // brandingImageURL=""
          tabItems={tabConfig}
          currentTab={currentTab}
          // removing this will remove the sider and collapse btn
          siderMenu={MySubMenu}
        >
          <Router history={history}>
            <Switch>
              <Route path="/one">
                <DemoPage mountCallback={changeCurrentTab('one')} />
              </Route>
              <Route path="/two">
                <CounterDemoPage mountCallback={changeCurrentTab('two')} />
              </Route>
              <Route exact path="/">
                <Redirect to="/one" />
              </Route>
            </Switch>
          </Router>
        </Layout>
      </Provider>
    </>
  );
};

export default App;
