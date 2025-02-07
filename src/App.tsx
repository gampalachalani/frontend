import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/web/Home";
import Enterprise from "./components/web/Enterprise";
import Investors from "./components/web/Investors";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Entrepreneurform from "./components/actions/Entreform";
import Investorform from "./components/actions/Invesform";
import EntpProfile from "./components/web/user/EntpProfile";
import InvsProfile from "./components/web/user/InvsProfile";
import FundingForm from "./components/actions/FundingForm";
import FundList from "./components/web/FundList";
import AdminDashboard from "./components/admin/AdminDashboard";
import Enterprises from "./components/admin/Enterprices";
import Investers from "./components/admin/Investors";
import Users from "./components/admin/Users";
import Transfer from "./components/web/Transfer";

const App: React.FC = () => {
  return (
    <div>
      <Router>
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
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/enterprises" element={<Enterprises />} />
          <Route path="/investers" element={<Investers />} />
          <Route path="/users" element={<Users />} />
          <Route path="/transfer/:projectId" element={<Transfer />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
