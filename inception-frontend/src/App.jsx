import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
