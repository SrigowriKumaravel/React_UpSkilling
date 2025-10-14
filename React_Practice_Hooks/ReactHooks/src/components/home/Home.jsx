import React, { useState } from "react";
import "./Home.css";
import Cart from "../state/Cart.jsx";

function Home() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [cartItems, setCartItems] = useState("");

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (productName && price) {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(price),
      };
      setCartItems([...cartItems, newProduct]);
      setProductName("");
      setPrice("");
    }
  };
  return (
    <div>
      <h1>Add Product</h1>
      <form className="form" onSubmit={handleAddToCart}>
        <label htmlFor="Product Name">Product Name</label>
        {/*Controller Inputs */}
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label htmlFor="Price">Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
      <Cart products={cartItems} setProdcuts={setCartItems} />
    </div>
  );
}

export default Home;
