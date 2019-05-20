import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Login } from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App () {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login}/>
        <PrivateRoute exact path="/protected" component={ParentsList}/>
      </div>
    </Router>
    );
}
export default App;