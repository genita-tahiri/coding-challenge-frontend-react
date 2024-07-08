import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Our Application</h2>
      <p className="about-description">
        Our single-page application (SPA) is designed to efficiently manage employee healthcare benefits. It allows employers and administrators to handle employee and dependent details effortlessly. One of the key features includes the calculation of benefit costs per paycheck, ensuring accurate and efficient management of healthcare benefits.
      </p>
      <div className="about-features">
        <h3 className="feature-heading">Main Features:</h3>
        <ul className="feature-list">
          <li className="feature-item">Employee and dependent management</li>
          <li className="feature-item">Calculation of benefit costs per paycheck</li>
          <li className="feature-item">CRUD functionality for employees and dependents</li>
        </ul>
      </div>
      <p className="about-summary">
        This application is designed to provide a user-friendly interface for managing healthcare benefits efficiently, ensuring ease of use for both employers and administrators.
      </p>

      <div className="about-benefits">
        <h3 className="benefits-heading">Calculated Benefits:</h3>
        <ul className="benefits-list">
          <li className="benefit-item">
            Employee Cost Calculation: Calculates the base cost of $1000/year for each employee, with a 10% discount applied if the employee's name starts with 'A'.
          </li>
          <li className="benefit-item">
            Dependent Cost Calculation: Calculates the base cost of $500/year for each dependent, with a 10% discount applied if the dependent's name starts with 'A'.
          </li>
          <li className="benefit-item">
            Total Cost Per Paycheck: Calculates the total annual cost for the employee and their dependents, then divides it by 26 to determine the cost per paycheck.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
