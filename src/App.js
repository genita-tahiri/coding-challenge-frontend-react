import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Employee from './components/Employee/Employee';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import About from './pages/About/About';
import './styles.scss';
import mockData from './mockData/mockApi.json';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Define editing state

   // Load employees from localStorage on initial mount
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees.length > 0 ? storedEmployees : mockData.employees);
  }, []);

   // Save employees to localStorage whenever employees state changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleAddEmployee = (employee) => {
    if (editEmployee) {
      // Update existing employee
      const updatedEmployees = employees.map(emp =>
        emp.id === editEmployee.id ? { ...employee, id: editEmployee.id } : emp
      );
      setEmployees(updatedEmployees);
      setEditEmployee(null);
      setIsEditing(false);
    } else {
      // Add new employee
      const newEmployee = { ...employee, id: employees.length + 1 };
      setEmployees([...employees, newEmployee]);
    }
  };

     // Delete employee
  const handleDeleteEmployee = (employeeId) => {
    const updatedEmployees = employees.filter(emp => emp.id !== employeeId);
    setEmployees(updatedEmployees);
    setEditEmployee(null);
    setIsEditing(false);
  };

  // Set employee to edit
  const handleEditEmployee = (employee) => {
    setEditEmployee(employee);
    setIsEditing(true);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <div className="lists">
                  <div className="list-item">
                    <Employee
                      employees={employees}
                      onDeleteEmployee={handleDeleteEmployee}
                      onEditEmployee={handleEditEmployee}
                      isEditing={isEditing}
                    />
                  </div>
                  <div className="list-item">
                    <EmployeeForm
                      onSubmit={handleAddEmployee}
                      initialEmployee={editEmployee}
                      setIsEditing={setIsEditing}
                    />
                  </div>
                </div>
              </>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
