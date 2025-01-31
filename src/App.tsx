import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/web/Home';
import Footer from './components/layout/Footer';
import Entrepreneurs from './components/web/Entrepreneurs';
import Investors from './components/web/Investors';
import Login from './components/auth/Login';
import './App.css'
import Signup from './components/auth/Signup';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/entrepreneurs" element={<Entrepreneurs />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


