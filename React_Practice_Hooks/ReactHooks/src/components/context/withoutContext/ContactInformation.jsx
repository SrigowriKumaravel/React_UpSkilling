import React from "react";

export default function ContactInformation({ contactInformation }) {
  const { phoneNo, address } = contactInformation;
  return (
    <div>
      <h3>Contact Information</h3>
      <p>Phone No: {contactInformation.phoneNo}</p>
      <p>Address: {contactInformation.address}</p>
    </div>
  );
}
