import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import ReadingArea from './Pages/ReadingArea/ReadingArea';
import Blog from './Pages/Blog/index';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home/>} />
      <Route path='/readingarea' element={<ReadingArea/>} />
      <Route path='/blog/:id' element={<Blog/>} />
      </Routes>
    </Router>
  );
}

export default App;
