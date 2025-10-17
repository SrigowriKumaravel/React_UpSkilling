import React, { useEffect, useState } from "react";

export default function EmployeeUpsert({ employee, onAdd, onUpdate, onReset }) {
  const [formState, setFormstate] = useState({
    name: "",
    age: "",
    emailAddress: "",
    phoneNo: "",
  });

  const [error, setError] = useState(""); // 👈 for validation messages

  useEffect(() => {
    if (employee) {
      setFormstate({
        name: employee.name || "",
        age: employee.age || "",
        emailAddress: employee.emailAddress || "",
        phoneNo: employee.phoneNo || "",
      });
    } else {
      setFormstate({
        name: "",
        age: "",
        emailAddress: "",
        phoneNo: "",
      });
    }
    setError(""); // clear error when employee changes
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormstate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation: prevent empty fields
    if (
      !formState.name.trim() ||
      !formState.age ||
      !formState.emailAddress.trim() ||
      !formState.phoneNo
    ) {
      setError("⚠️ Please fill in all fields before submitting.");
      return;
    }

    // ✅ Optionally: more checks (e.g., valid age)
    if (isNaN(formState.age) || formState.age <= 0) {
      setError("⚠️ Please enter a valid age.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formState.emailAddress)) {
      setError("⚠️ Please enter a valid email address.");
      return;
    }

    if (isNaN(formState.phoneNo) || formState.phoneNo.length < 6) {
      setError("⚠️ Please enter a valid phone number.");
      return;
    }

    // ✅ If valid, add or update
    if (employee) {
      const updatedEmployee = { ...employee, ...formState };
      onUpdate(updatedEmployee);
    } else {
      onAdd(formState);
    }

    // ✅ Clear form and error
    setFormstate({ name: "", age: "", emailAddress: "", phoneNo: "" });
    setError("");
  };

  return (
    <div>
      <div className="form-container">
        <h1>{employee ? "Update Employee" : "Add Employee"}</h1>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* 👈 show error */}
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formState.age}
            onChange={handleChange}
          />
          <label>Email Address</label>
          <input
            type="text"
            name="emailAddress"
            value={formState.emailAddress}
            onChange={handleChange}
          />
          <label>Phone No</label>
          <input
            type="number"
            name="phoneNo"
            value={formState.phoneNo}
            onChange={handleChange}
          />

          <button type="submit" className="btn-submit">
            {employee ? "Update" : "Add"}
          </button>
          <button type="button" className="btn-reset" onClick={onReset}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
