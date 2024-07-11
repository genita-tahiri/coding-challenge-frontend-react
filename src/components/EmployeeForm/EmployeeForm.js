import React, { useState, useEffect } from 'react';
import './EmployeeForm.scss';

const EmployeeForm = ({ onSubmit, initialEmployee, setIsEditing }) => {
  const [employee, setEmployee] = useState({ name: '', dependents: [] });
  const [dependentName, setDependentName] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (initialEmployee) {
      setEmployee(initialEmployee);
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [initialEmployee, setIsEditing]);

  // Function to handle changes to a dependent's name
  const handleDependentChange = (index, newName) => {
    const updatedDependents = [...employee.dependents];
    updatedDependents[index].name = newName;
    setEmployee({ ...employee, dependents: updatedDependents });
  };

  // Function to add a new dependent to the employee
  const handleAddDependent = () => {
    if (dependentName.trim() !== '') {
      const newDependent = { id: Date.now(), name: dependentName };
      setEmployee({ ...employee, dependents: [...employee.dependents, newDependent] });
      setDependentName('');
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee); // Call the onSubmit function with the current employee data
    // Reset form fields and show success message
    setEmployee({ name: '', dependents: [] });
    setDependentName('');
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide success message after 3 seconds
  };

  return (
    <div className="employee-form">
      <h2 className="form-title">{initialEmployee ? 'Edit Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Employee Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter new employee name"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Dependents</label>
          <ul className="dependent-list">
            {employee.dependents.map((dependent, index) => (
              <li key={dependent.id}>
                <input
                  type="text"
                  className="form-input"
                  value={dependent.name}
                  onChange={(e) => handleDependentChange(index, e.target.value)}
                  placeholder={`Enter dependent ${index + 1} name`}
                />
              </li>
            ))}
            <li>
              <div className="add-dependent">
                <input
                  type="text"
                  className="form-input"
                  value={dependentName}
                  onChange={(e) => setDependentName(e.target.value)}
                  placeholder="Enter new dependent name"
                />
                <button type="button" className="add-dependent-btn" onClick={handleAddDependent}>
                  Add Dependent
                </button>
              </div>
            </li>
          </ul>
        </div>
        <button type="submit" className="submit-btn">
          {initialEmployee ? 'Update Employee' : 'Add Employee'}
        </button>
      </form>
      {showSuccessMessage && (
        <div className="success-message">
          <p>Your changes have been saved successfully!</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;
