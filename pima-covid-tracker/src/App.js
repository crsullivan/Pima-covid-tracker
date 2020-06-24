import React, {useEffect, useState} from 'react';
import { Router, Route, Switch } from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard';
import Admin from "./Admin";
import PrivateRoute from "./privateRoute";
import AddData from './AddData'
import history from "./history";


function App() {
  return (
    <Router history={history}>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/admin" component={Admin} />
        <PrivateRoute path="/add" component={AddData} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
