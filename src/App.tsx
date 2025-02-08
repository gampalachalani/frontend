import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/web/Home";
import Enterprise from "./components/web/Enterprise";
import Investors from "./components/web/Investors";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import EntpProfile from "./components/web/user/EntpProfile";
import InvsProfile from "./components/web/user/InvsProfile";
import FundingForm from "./components/actions/FundingForm";
import FundList from "./components/web/FundList";
import AdminDashboard from "./components/admin/AdminDashboard";
import Enterprises from "./components/admin/Enterprices";
import Investers from "./components/admin/Investors";
import Users from "./components/admin/Users";
import Transfer from "./components/web/Transfer";
import EnterpriseForm from "./components/actions/EntreForm";
import Investorform from "./components/actions/InvesForm";
import UpdateInvester from "./components/actions/UpdateInvester";
import UpdateEnterpriseForm from "./components/actions/UpdateEnterprise";
import EntpProfileEdit from "./components/web/user/EntpProfileEdit";
import InvsProfileEdit from "./components/web/user/InvsProfileEdit";

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
          <Route path="/entpProfile/:enterpriseId" element={<EntpProfile />} />
          <Route path="/entpProfileEdit/:enterpriseId" element={<EntpProfileEdit />} />
          <Route path="/invsProfile/:investorId" element={<InvsProfile />} />
          <Route path="/invsProfileEdit/:investorId" element={<InvsProfileEdit />} />
          <Route path="/funding" element={<FundingForm />} />
          <Route path="/fundList" element={<FundList />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/enterprises" element={<Enterprises />} />
          <Route path="/investers" element={<Investers />} />
          <Route path="/users" element={<Users />} />
          <Route path="/transfer/:projectId" element={<Transfer />} />
          <Route path="/entpForm" element={<EnterpriseForm />} />
          <Route path="/intForm" element={<Investorform />} />
          <Route path="/updateInvester/:investorId" element={<UpdateInvester />} />
          <Route path="/updateEnterprise/:enterpriseId" element={<UpdateEnterpriseForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
