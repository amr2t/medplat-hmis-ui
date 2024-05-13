import React from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Route, BrowserRouter, Routes } from 'react-router-dom';




function App() {
  return (
    <>   
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </BrowserRouter>
    </div>  
    </>
  );
}
export default App;
