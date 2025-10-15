import React, { startTransition, useTransition, useState } from "react";

export default function LargeListFilter(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState(
    Array.from({ length: 20000 }, (_, i) => `item ${i + 1}`)
  );
  const [filteredList, setFilteredList] = useState(list);

  //Using the transition hook
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    //Mark this update as a transition not priority
    startTransition(() => {
      const filtered = list.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredList(filtered);
    });
  };
  return (
    <div>
      <h1>useTransition Using Large List Filter</h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search..."
        onChange={handleSearch}
      />
      {isPending && <p>Loading...</p>}
      {""}
      {/**Show a loading spinner or message during transtition */}
      {filteredList.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
