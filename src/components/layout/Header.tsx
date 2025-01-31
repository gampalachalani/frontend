import React, { useEffect } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo1.png';
import search from '../assets/search.png'
import { logout } from '../../services/AuthService';

const Header: React.FC = () => {
  const [token, setTooken] = React.useState<string | null>(null);
  const [firstName, setFirstName] = React.useState<string | null>(null);  

  useEffect(() => {
    const tocken = sessionStorage.getItem('token');
    const fName = sessionStorage.getItem('firstName');
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
        <a className="nav-link" href="/home">Home</a>
        <a className="nav-link" href="/enterprise">Entrepreneurs</a>
        <a className="nav-link" href="/investors">Investors</a>
      </div>

        <div className="search-bar">
          <img src={search} alt="Search" />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="right-links">
        <a className="nav-link" href="/funding">Funds</a>
        {token ? <button className="nav-link" onClick={logout}>Logout</button> : <a className="nav-link" href="/login">Sign In</a>}
        <div className="text-white d-flex">{firstName}</div>
      </div>
    
    </div>
    </nav>
  );
};

export default Header;