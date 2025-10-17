import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Employees from "./components/Employees";
import EmployeeUpsert from "./components/EmployeeUpsert";
import axios from "axios";

const BASE_URL = "https://localhost:5001/api";

function App() {
  const [employees, setEmployees] = useState([]);

  const [employee, setEmployee] = useState(null);

  const apiRequest = useCallback(async (method, endpoint, data = null) => {
    try {
      const response = await axios({
        method,
        url: `${BASE_URL}${endpoint}`,
        data,
      });
      return response.data;
    } catch (error) {
      console.error(`Error during ${method} request to ${endpoint}`, error);
    }
  }, []);
  const fetchData = async () => {
    try {
      const data = await apiRequest("get", "/Employee");
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [employee]);

  const handleAdd = async (newEmployee) => {
    try {
      const addedEmployee = await apiRequest("post", "/employee", newEmployee);
      setEmployees((prevEmployees) => [...prevEmployees, addedEmployee]);
    } catch (error) {
      console.error("Error adding employees", error);
    }
  };

  const handleEdit = (id) => {
    const emp = employees.find((x) => x.id === id);
    setEmployee(emp);
  };

  const handleUpdate = async (updatedEmployee) => {
    try {
      await apiRequest(
        "put",
        `/employee/${updatedEmployee.id}`,
        updatedEmployee
      );
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === updatedEmployee.id ? updatedEmployee : emp
        )
      );
      setEmployee(null); // Clear the form after update
    } catch (error) {
      console.log("Error updating the employee", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiRequest("delete", `/employee/${id}`);
      setEmployees((prevEmployees) =>
        prevEmployees.filter((emp) => emp.id !== id)
      );
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };

  const handleReset = () => {
    setEmployee(null); // Switch back to "Add" mode
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
        onReset={handleReset}
        onUpdate={handleUpdate}
        onAdd={handleAdd}
      />
    </div>
  );
}

export default App;
