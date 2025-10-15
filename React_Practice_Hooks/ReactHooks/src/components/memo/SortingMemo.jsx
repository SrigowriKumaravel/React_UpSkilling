import React from "react";

export default function SortingMemo() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [items, setItems] = useState([5, 3, 8, 9, 6, 1]);

  //Without Memory
  // const sortedItems = items.sort((a, b) => {
  //     console.log('Sorting items without memory');
  //     return sortOrder === 'asc' ? a - b : b - a;
  // });

  //With Memory
  const sortedItems = useMemo(() => {
    console.log("Sorting items....");
    return items.slice().sort((a, b) => {
      return sortOrder === "asc" ? a - b : b - a;
    });
  }, [items, sortOrder]);
  return (
    <div>
      <h1>Sorting Example (With useMEmo)</h1>
      {sortedItems.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        Toggle Sort Order
      </button>
    </div>
  );
}
