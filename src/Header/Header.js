import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Healthcare Benefits Management</h1>
        <nav className="header-nav">
          <ul className="header-menu">
            <li className="header-menu-item">
              <Link to="/" className="header-link">Home</Link>
            </li>
            <li className="header-menu-item">
              <Link to="/about" className="header-link">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
