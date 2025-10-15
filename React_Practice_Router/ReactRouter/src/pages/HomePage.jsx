import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div className="container">
      <h1 className="title">Welcome to E-Shop</h1>
      <div className="home">
        <img
          className="banner"
          src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
          alt="img"
        />
        <div className="category">
          <h1>PICK YOUR CATEGORY</h1>
          <div className="links">
            <Link to={"/electronics"} className="link">
              Electronics
            </Link>
            <Link to={"/books"} className="link">
              Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
