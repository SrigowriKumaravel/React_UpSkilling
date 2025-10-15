import React from "react";
import ContactInformation from "../withoutContext/ContactInformation.jsx";

export default function StudentDetails({ subjects, contactInformation }) {
  return (
    <div>
      <h3>Subjects</h3>
      <ul className="subject">
        {subjects.map((subjects, index) => {
          return <li key={index}>{subjects}</li>;
        })}
      </ul>
      <ContactInformation contactInformation={contactInformation} />
    </div>
  );
}
