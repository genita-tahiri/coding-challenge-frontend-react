import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">&copy; {new Date().getFullYear()} Healthcare Benefits Management</p>
      </div>
    </footer>
  );
};

export default Footer;
