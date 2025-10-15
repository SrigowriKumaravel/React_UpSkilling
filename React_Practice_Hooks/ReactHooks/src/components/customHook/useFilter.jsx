import React, { useState } from "react";

export function useFilter(initialItems) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = initialItems.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return {
    filteredItems,
    searchTerm,
    setSearchTerm,
  };
}
