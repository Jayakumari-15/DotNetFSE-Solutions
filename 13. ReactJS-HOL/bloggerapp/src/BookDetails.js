import React from "react";

function BookDetails(props) {
  return (
    <div>
      <h2>Book Details</h2>

      {props.books.map((book) => (
        <div key={book.id}>
          <h4>{book.bname}</h4>
          <h5>{book.price}</h5>
          <br />
        </div>
      ))}
    </div>
  );
}

export default BookDetails;