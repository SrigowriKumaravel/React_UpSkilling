import React, { useState } from "react";

export default function WithoutTransition() {
  const [searchTerm, setSearchTerm] = useState("");
  const [list] = useState(
    Array.from({ length: 20000 }, (_, i) => `Item ${i + 1}`)
  );
  const [filteredList, setFilteredList] = useState(list);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filtering happens synchronously — no useTransition yet
    const filtered = list.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filtered);
  };

  return (
    <div>
      <h1>Without useTransition Example</h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search..."
        onChange={handleSearch}
      />
      {filteredList.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
