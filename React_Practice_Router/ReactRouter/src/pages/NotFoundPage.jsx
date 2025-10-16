import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage(props) {
  return (
    <div className="not-found">
      <p className="errorNumber">404</p>
      <p className="errorMessage">Page not found</p>
      <Link className="btn-primary-link" to={"/"}>
        Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
