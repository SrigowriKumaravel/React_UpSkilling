import React from "react";
import { books } from "../../../Dataset/dataset";
import { useParams } from "react-router-dom";
import BookDetails from "../components/BookDetails";

function BooksDetailsPage(props) {
  const { id } = useParams();
  const item = books.find((x) => x.id === +id);

  if (!item) {
    return (
      <div
        style={{ paddingTop: "6rem", fontSize: "1.4rem", textAlign: "center" }}
      >
        Item Not Found
      </div>
    );
  }
  return (
    <div className="sidebar">
      <h1>Product Details</h1>
      <div className="sidebar-content">
        <BookDetails product={item} />
      </div>
    </div>
  );
}

export default BooksDetailsPage;
