import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Dashboard from "./components/dashboard/Dashboard"
import { Route, Routes } from 'react-router-dom';
import Detail from './components/detail/Detail';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/detail' element={<Detail/>} />
    </Routes>
  );
}

export default App;
