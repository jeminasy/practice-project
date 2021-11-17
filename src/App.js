import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Custom from './Custom/Custom';
// import ViewFrosting from './ViewProduct/ViewFrosting';
import Frosting from './ViewProduct/Frosting';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/custom' exact component={Custom} />
          <Route path='/custom/frosting/:id' exact component={Frosting} />
        </Switch>
    </Router>
  );
}

export default App;
