import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Page404 from "./views/Page404";
import Home from './views/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
