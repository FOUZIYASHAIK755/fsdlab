function updateEmployeeDetails(employee, newRole) {
    return {
      ...employee, 
      role: newRole
    };
  }
  
  // Example usage:
  const employee = {name: 'Afroz', role: 'Developer', age: 28, location: 'IN'};
  const updatedEmployee = updateEmployeeDetails(employee, 'Senior Developer');
  console.log(updatedEmployee);
 