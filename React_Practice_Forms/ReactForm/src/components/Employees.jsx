import React from "react";

function Employees({ employees, onEdit, onDelete }) {
  if (employees.length === 0) {
    return (
      <div>
        <h1>No Records to Show</h1>
      </div>
    );
  }
  return (
    <div className="cards">
      {employees.map((employee) => {
        return (
          <div className="card" key={employee.id}>
            <p>
              <span className="title">Name: </span>
              {employee.name}
            </p>
            <p>
              <span className="title">Age: </span>
              {employee.age}
            </p>
            <p>
              <span className="title">Email Address: </span>
              {employee.emailAddress}
            </p>
            <p>
              <span className="title">Phone No: </span>
              {employee.phoneNo}
            </p>
            <div className="btn-group">
              <button
                className="btn-update"
                onClick={() => {
                  onEdit(employee.id);
                }}
              >
                <b>Edit</b>
              </button>
              <button
                className="btn-delete"
                onClick={() => {
                  onDelete(employee.id);
                }}
              >
                <b>Delete</b>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Employees;
