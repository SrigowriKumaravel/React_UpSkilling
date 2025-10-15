import React, { createContext } from "react";
import { studentData } from "../../../../../dataset/dataset";
import "../common/Student.css";
import StudentDetails from "./StudentDetails";

export const StudentContext = createContext();

export default function Student() {
  return (
    <StudentContext.Provider value={studentData}>
      <div>
        <h1>Student Details with useContext Hook</h1>
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
    </StudentContext.Provider>
  );
}
