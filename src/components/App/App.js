import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import About from '../About/About';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route exact path='/'>
          <About/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
