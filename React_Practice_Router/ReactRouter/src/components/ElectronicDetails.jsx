import React from "react";

function ElectronicDetails(props) {
  const { name, price, quantityAvailable, imageLink } = props.product;
  return (
    <div className="product">
      <img src={imageLink} alt={name} />
      <p>
        <span className="product-details">Product:</span>
        {name}
      </p>
      <p>
        <span className="product-details">Price:</span>
        {price}
      </p>
      <p>
        <span className="product-details">InStock:</span>
        {quantityAvailable}
      </p>
    </div>
  );
}

export default ElectronicDetails;
