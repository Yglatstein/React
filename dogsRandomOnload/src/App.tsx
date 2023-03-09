import React , {useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dog from './components/dogs/Dog';
import axios from 'axios';

function App() {
  return(
  <div>
    <Dog />
  </div>
  )  
}

export default App;