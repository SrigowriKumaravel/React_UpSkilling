import React, { useCallback, useContext } from "react";
import { StudentContext } from "./Student";

export default function ContactInformation() {
  const { contactInformation } = useContext(StudentContext);
  const { phoneNo, address } = contactInformation;
  return (
    <div>
      <h3>Contact Information</h3>
      <p>Phone No: {phoneNo}</p>
      <p>Address: {address}</p>
    </div>
  );
}
