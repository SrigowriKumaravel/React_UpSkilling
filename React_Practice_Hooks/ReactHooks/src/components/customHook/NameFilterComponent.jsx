import React, { useState } from "react";
import { useFilter } from "./useFilter";

function NameFilterComponent(props) {
  const initialNames = ["Alice", "Bob", "Charlie", "David", "Edward"];

  const { filteredItems, searchTerm, setSearchTerm } = useFilter(initialNames);

  return (
    <div>
      <h1>Name Filter without Custom Hook</h1>
      <input
        type="text"
        placeholder="Search names"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "1rem", fontSize: "1rem" }}
      />
      <h2>Filtered Names</h2>
      <div>
        {filteredItems.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </div>
  );
}

export default NameFilterComponent;
