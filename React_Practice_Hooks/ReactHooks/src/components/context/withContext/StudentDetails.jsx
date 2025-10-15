import React, { useContext } from "react";
import { StudentContext } from "./Student";
import ContactInformation from "./ContactInformation";

export default function StudentDetails() {
  const { subjects } = useContext(StudentContext);
  return (
    <div>
      <h3>Subjects</h3>
      <ul className="subject">
        {subjects.map((subjects, index) => {
          return <li key={index}>{subjects}</li>;
        })}
      </ul>
      <ContactInformation />
    </div>
  );
}
