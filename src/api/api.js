import employeesData from '../mockData/mockApi.json';

let employees = employeesData;

export const fetchEmployees = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employees);
    }, 500);
  });
};

export const addEmployee = (employee) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      employee.id = employees.length ? employees[employees.length - 1].id + 1 : 1;
      employees.push(employee);
      resolve(employee);
    }, 500);
  });
};

export const updateEmployee = (updatedEmployee) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      employees = employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp);
      resolve(updatedEmployee);
    }, 500);
  });
};

export const deleteEmployee = (employeeId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      employees = employees.filter(emp => emp.id !== employeeId);
      resolve();
    }, 500);
  });
};
