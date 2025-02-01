import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/web/Home';
import Footer from './components/layout/Footer';
import Enterprise from './components/web/Enterprise';
import Investors from './components/web/Investors';
import Login from './components/auth/Login';
import './App.css'
import Signup from './components/auth/Signup';
import Entrepreneurform from './components/actions/Entrepreneurform';
import Investorform from './components/actions/Investorform';
import EntpProfile from './components/web/user/EntpProfile';
import InvsProfile from './components/web/user/InvsProfile';
import FundingForm from './components/actions/FundingForm';
import FundList from './components/web/FundList';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/entpForms" element={<Entrepreneurform />} />
        <Route path="/intForm" element={<Investorform />} />
        <Route path="/entpProfile/:enterpriseId" element={<EntpProfile />} />
        <Route path="/invsProfile/:investorId" element={<InvsProfile />} />
        <Route path="/funding" element={<FundingForm />} />
        <Route path="/fundList" element={<FundList />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


