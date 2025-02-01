import React, { useEffect } from "react";
import "../styles/Header.css";
import logo from "../assets/logo1.png";
import { logout } from "../../services/AuthService";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [token, setTooken] = React.useState<string | null>(null);
  const [firstName, setFirstName] = React.useState<string | null>(null);

  useEffect(() => {
    const tocken = sessionStorage.getItem("token");
    const fName = sessionStorage.getItem("firstName");
    setTooken(tocken);
    setFirstName(fName);
    //console.log(tocken);
    //console.log(firstName);
  }, []);
  //console.log(tocken);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/home">
            <img src={logo} alt="Company Logo" />
          </a>
        </div>
        <div className="left-links">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/enterprise"
          >
            Entrepreneurs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/investors"
          >
            Investors
          </NavLink>
        </div>

        

        <div className="right-links">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/funding"
          >
            Funds
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/fundList"
          >
            Fund List
          </NavLink>
          {token ? (
            <button className="nav-link" onClick={logout}>
              Logout
            </button>
          ) : (
            <a className="nav-link" href="/login">
              Sign In
            </a>
          )}
          <div className="text-white d-flex">{firstName}</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
