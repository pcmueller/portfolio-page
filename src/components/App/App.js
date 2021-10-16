import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio/>
          </Route>
          <Route path='/'>
            <Landing/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
