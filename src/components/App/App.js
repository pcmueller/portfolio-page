import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from '../Landing/Landing';
import About from '../About/About';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route exact path='/home'>
          <About/>
        </Route>
        <Route path='/'>
          <Landing/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
