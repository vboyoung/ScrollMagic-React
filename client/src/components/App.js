import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Layout from './views/Layout/Layout';
import LoginPage from './views/LoginPage/LoginPage';


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route exact path="/login" component={LoginPage} />     
    </Switch>
</Router>
);

export default App;
