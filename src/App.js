import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Landing/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to Call Echeve
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
    </div>
  );
}

export default App;
