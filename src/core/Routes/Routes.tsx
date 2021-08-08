import { Switch, Route } from "react-router-dom";

import { MainPage, HelloPage } from "pages";

/** Handles the URL based routing for the application. Different page components will be served depending on the URL */
const Routes: React.FC = () => (
  <Switch>
    <Route path="/hello">
      <HelloPage />
    </Route>
    <Route path="/">
      <MainPage />
    </Route>
  </Switch>
);

export default Routes;
