import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Dashboard from "./components/dashboard/Dashboard"
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
