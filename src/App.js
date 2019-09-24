import React from 'react';
import Nav from './components/header/nav';
import RouterIndex from './router/RouterIndex';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <RouterIndex/>
    </div>
  );
}

export default App;
