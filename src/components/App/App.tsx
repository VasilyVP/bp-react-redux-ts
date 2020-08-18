import React from 'react';
import logo from '../../assets/imgs/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React-Redux Typescript boilerplate</p>
        <p>
          react, redux, redux-thunk, react-redux, redux-logger, @types/react-redux,
          fs-extra
        </p>
        <img src={logo} className="App-logo" alt="logo" width="300" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
