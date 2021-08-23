import React from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className='app-header'>
            <div></div>
            <div className='app-title-container'>
              <NavLink to='/' className='home-link'>
                <h1 className='app-title'>Pete's Wacky Code Party</h1>
              </NavLink>
            </div>
          </header>
      </div>
      <Route exact path='/'>
      </Route>
    </Router>
  );
}

export default App;
