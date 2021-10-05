import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import MainRoutes from './routes/MainRoutes';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
            <MainRoutes />
      </Router>
    </div>
  );
}

export default App;
