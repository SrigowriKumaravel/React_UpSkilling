import React, { useState, useEffect } from "react";
import Employees from "./components/Employees";
import EmployeeUpsert from "./components/EmployeeUpsert.jsx";
import "./index.css";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Alex",
      age: 36,
      emailAddress: "alex@gmail.com",
      phoneNo: 789456123,
    },
    {
      id: 2,
      name: "John",
      age: 28,
      emailAddress: "john@gmail.com",
      phoneNo: 987654321,
    },
  ]);

  const [employee, setEmployee] = useState(null);

  // ✅ Add Employee (with validation)
  const handleAdd = (newEmployee) => {
    if (
      !newEmployee.name.trim() ||
      !newEmployee.age ||
      !newEmployee.emailAddress.trim() ||
      !newEmployee.phoneNo
    ) {
      alert("⚠️ Please fill in all fields before adding!");
      return;
    }

    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { ...newEmployee, id: prevEmployees.length + 1 },
    ]);
  };

  // ✅ Edit Employee
  const handleEdit = (id) => {
    const emp = employees.find((x) => x.id === id);
    setEmployee(emp);
  };

  // ✅ Update Employee
  const handleUpdate = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setEmployee(null);
  };

  // ✅ Reset form
  const handleReset = () => {
    setEmployee(null);
  };

  // ✅ Delete Employee
  const handleDelete = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((emp) => emp.id !== id)
    );
    setEmployee(null);
  };

  return (
    <div className="main-container">
      <Employees
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <EmployeeUpsert
        employee={employee}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;
