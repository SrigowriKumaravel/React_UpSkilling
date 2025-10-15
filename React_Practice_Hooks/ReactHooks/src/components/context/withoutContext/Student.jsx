import React from "react";
import { studentData } from "../../../../../dataset/dataset";
import "../common/Student.css";
import StudentDetails from "./StudentDetails";
import ContactInformation from "./ContactInformation";

export default function Student() {
  return (
    <div>
      <h1>Student Details without useContext Hook</h1>
      <div className="student-detail">
        <div>
          <h3>Name</h3>
          <p>{studentData.name}</p>
          <h3>Age</h3>
          <p>{studentData.age}</p>
          <h3>Department</h3>
          <p>{studentData.department}</p>
        </div>
        <StudentDetails
          subjects={studentData.subjects}
          contactInformation={studentData.contactInformation}
        />
      </div>
    </div>
  );
}
