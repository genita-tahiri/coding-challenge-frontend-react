import React from 'react';
import './Employee.scss';

const Employee = ({ employees, onDeleteEmployee, onEditEmployee }) => {
  return (
    <div className="employee-list">
      <h2 className="list-title">Employees and Dependents</h2>
      <ul className="list-group">
        {employees.map((employee) => (
          <li key={employee.id} className="list-items">
            <div className="employee-info">
              <div className="employee-label">Employee:</div>
              <div className="employee-name">{employee.name}</div>
            </div>
            {employee.dependents.length > 0 && (
              <ul className="dependent-list">
                <div className="employee-label">Dependents:</div>
                {employee.dependents.map((dependent) => (
                  <li key={dependent.id} className="dependent-item">
                    {dependent.name}
                  </li>
                ))}
              </ul>
            )}
            <div className="button-group">
              <button onClick={() => onEditEmployee(employee)} className="edit-button">
                Edit
              </button>
              <button onClick={() => onDeleteEmployee(employee.id)} className="delete-button">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employee;