import React from "react";
import { electronics } from "../../../Dataset/dataset";

function ElectronicsDetailsPage(props) {
  const item = electronics.find((x) => x.id === 1);
  return (
    <div className="sidebar">
      <h1>Product Details</h1>
      <div className="sidebar-content">
        <div className="product">
          <img src={item.imageLink} alt={item.name} />
          <p>
            <span className="product-details">Product:</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ElectronicsDetailsPage;
