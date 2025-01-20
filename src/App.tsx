import React from 'react';
import HomePage from './pages/home/HomePage';

import useTitle from './utils/hooks/useTitle'; 

import './App.css';

function App() {
  useTitle("Portfolio");

  return (
    <div className="App">
        <HomePage />
    </div>
  );
}

export default App;
