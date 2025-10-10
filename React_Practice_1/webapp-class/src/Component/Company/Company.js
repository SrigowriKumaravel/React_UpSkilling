import "./Company.css";
import { Component } from "react";
import Department from "../Department/Department";

class Company extends Component {
    
  render() {
    const {
      companyName = "Unknown Company",
      details = "No details available",
      departments,
      onCompanySelect,
    } = this.props;

    return (
      <div className="details">
        <h5 className="company-title">
          Company Name: <span>{companyName}</span>
        </h5>
        <p>{details}</p>
        <button
          className="primary-btn-md"
          onClick={() => {
            onCompanySelect(companyName);
          }}
        >
          Select {companyName}
        </button>

        <div
          style={{
            border: "5px solid grey",
            padding: "0.6rem 0.8rem",
            borderRadius: "1rem",
            backgroundColor: "#cccccc",
          }}
        >
          <Department
            departments={departments}
            onDepartmentSelect={(departmentName) => {
              // Pass combined company and department back to parent
              onCompanySelect(`${companyName} - ${departmentName}`);
            }}
          >
            <h5>Departments</h5>
          </Department>
        </div>
      </div>
    );
  }
}

export default Company;
