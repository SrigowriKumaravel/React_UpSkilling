import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { books } from "../../../Dataset/dataset";

function BooksPage(props) {
  //Navigate Programmatically
  const navigate = useNavigate();

  const NavigateHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="card-header">
        <h1>Books</h1>
        {/* <Link to={"/"} className="btn-danger-link">
          Home
        </Link> */}
        <button className="btn-danger-link" onClick={navigateHome}>
          Home
        </button>
      </div>
      <div className="card-grid">
        {books.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <img
                src={item.imageLink}
                alt={item.title}
                style={{ height: "300px" }}
              />
              <p>
                <span className="product-details">Book:</span>
                {item.title}
              </p>
              <p>
                <span className="product-details">Price:</span>
                {item.price}
              </p>
              <Link className="btn-link" to={``}>
                View Books
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BooksPage;
