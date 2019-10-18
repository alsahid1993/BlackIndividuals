import React from "react";
import App from "./App/App";
import Mapspage from "./Maps/mapspage";
import BlkMaps from "../src//Maps/BlackMaps";
import ArticleInfo from "./Articles/TeamArticles";
import AboutUsPpl from "./About/AboutUs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/home" component={App} />
      <Route exact path="/trips" component={BlkMaps} />
      <Route exact path="/AboutUs" component={AboutUsPpl} />
      <Route exact path="/trips" component={ArticleInfo} />
    </Switch>
  </Router>
);
