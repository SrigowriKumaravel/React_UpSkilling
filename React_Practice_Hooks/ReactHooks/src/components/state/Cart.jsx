import React, { useEffect, useState } from "react";
import "./Cart.css";

export default function Cart({ products, setProdcuts }) {
  const [totalNoOfProduct, setTotalNoOfProduct] = useState(products.length);

  useEffect(() => {
    setTotalNoOfProduct(products.length);
  }, [products]);

  const handleDelete = (id) => {
    const updateProducts = products.filter((x) => x.id !== id);
    setProducts('');
  };
  const handleDeleteAll = () => {
    setProdcuts([]);
  };

  if (products.length === 0) {
    return <h1>Cart is Empty</h1>;
  }

  return (
    <div className="cards">
      <h1>Item in Cart:{totalNoOfProduct}</h1>
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <p>
              {product.name} Rs.{product.price}
            </p>
            <button
              className="btn-delete"
              onClick={() => {
                handleDelete(product.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <button className="btn btn-primary" onClick={handleDeleteAll}>
        Delete All
      </button>
    </div>
  );
}

// export default function Cart() {
//   const [products, setProducts] = useState(data);
//   const [totalNoOfProduct, setTotalNoOfProduct] = useState(data.length);

//   const handleDeleteAll = () => {
//     setProducts([]);
//     setTotalNoOfProduct(0);
//   };

//   const handleDelete = (id) => {
//     const updateProducts = products.filter((x) => x.id !== id);
//     setProducts(updateProducts);
//     setTotalNoOfProduct(updateProducts.length);
//   };

//   const handleReset = () => {
//     setProducts(data);
//     setTotalNoOfProduct(data.length);
//   };

//   return (
//     <div className="cards">
//       <h1>Item in Cart:{totalNoOfProduct}</h1>
//       {products.map((product) => {
//         return (
//           <div className="card" key={product.id}>
//             <p>
//               {product.name},Rs.{product.price}
//             </p>
//             <button
//               className="btn-delete"
//               onClick={() => {
//                 handleDelete(product.id);
//               }}
//             >
//               Delete
//             </button>
//           </div>
//         );
//       })}
//       <button className="btn btn-primary" onClick={handleDeleteAll}>
//         Delete All
//       </button>
//       <button className="btn btn-primary" onClick={handleReset}>
//         Reset
//       </button>
//     </div>
//   );
// }
