import React from "react";

function BookDetails(props) {
  const { title, price, author, quantityAvailable,imageLink } = props.product;
  return (
    <div className="product">
      <img src={imageLink} alt={name} style={{ height: "500px" }} />
      <p>
        <span className="product-details">Product:</span>
        {title}
      </p>
      <p>
        <span className="product-details">Price:</span>
        {price}
      </p>
      <p>
        <span className="product-details">InStock:</span>
        {author}
      </p>
      <p>
        <span className="product-details">InStock:</span>
        {quantityAvailable}
      </p>
    </div>
  );
}

export default BookDetails;
