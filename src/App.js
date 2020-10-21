import React from 'react';
import './App.css';
import Loginform from './components/Loginform';
import Employeedash from './components/Employeedash';
import Error from './components/Error';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Loginform} />
          <Route path='/employeedashboard' component={Employeedash} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
  