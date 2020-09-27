import React from 'react';
import Img from './components/Img';
import logo from './assets/images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Img src={logo} className="App-logo" alt="logo" />
        <p>
          Initial app status.
        </p>
      </header>
    </div>
  );
}

export default App;
