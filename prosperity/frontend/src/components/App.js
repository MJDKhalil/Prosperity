import React from 'react';
import {render} from 'react-dom'
import Home from './Home';
import './App.css';

function App() {
  return (
    //BEM naming convention 
    <div className="app">
       <Home />   
    </div>
  );
}

export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);