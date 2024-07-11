import React from 'react';
import './BenefitsCost.scss';

const BenefitsCost = ({ employee }) => {
  // Function to calculate the cost for an employee based on their name
  const calculateCost = (name) => {
    let cost = 1000; // Base cost for an employee
    if (name && name.startsWith('A')) {
      cost -= cost * 0.1; // Apply a 10% discount if the name starts with 'A'
    }
    return cost;
  };

  // Function to calculate the cost for a dependent based on their name
  const calculateDependentCost = (name) => {
    let cost = 500; // Base cost for a dependent
    if (name && name.startsWith('A')) {
      cost -= cost * 0.1; // Apply a 10% discount if the name starts with 'A'
    }
    return cost;
  };

  // Function to calculate the total cost per paycheck for an employee including dependents
  const calculateTotalCostPerPaycheck = (employee) => {
    const employeeCost = calculateCost(employee.name); // Calculate cost for the employee
    const dependentsCost = employee.dependents.reduce(
      // Calculate total cost for dependents
      (acc, dep) => acc + calculateDependentCost(dep.name),
      0
    );
    const totalAnnualCost = employeeCost + dependentsCost; // Total annual cost
    return (totalAnnualCost / 26).toFixed(2); // Divide by number of paychecks in a year and format to 2 decimal places
  };
  return (
    <div className="benefit-calculator">
      <div className="employee-costs">
      <div>Calculated Benefits </div>
            <div className="employee-info">
              <span className="paycheck-cost">
                ${calculateTotalCostPerPaycheck(employee)} per paycheck
              </span>
            </div>
      </div>
    </div>
  );
};

export default BenefitsCost;