import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Layout from './views/Layout/Layout';
import LoginPage from './views/LoginPage/LoginPage';
import Scrollup from './views/Scrollup/Scrollup';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route exact path="/login" component={LoginPage} />     
      <Route exact path="/Scrollup" component={Scrollup} />     
    </Switch>
</Router>
);

export default App;
