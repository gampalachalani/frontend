import React from "react";
import logo from "../assets/logo1.png";
import { NavLink } from "react-router-dom";
const AdminTopNav: React.FC = () => {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <a className="navbar-brand ps-3 d-flex align-items-center" href="index.html">
    <div className="logo">
          <NavLink to="/home">
            <img src={logo} alt="Company Logo" />
          </NavLink>
        </div>
      Seed Link
    </a>
    </nav>
  );
};
export default AdminTopNav;
