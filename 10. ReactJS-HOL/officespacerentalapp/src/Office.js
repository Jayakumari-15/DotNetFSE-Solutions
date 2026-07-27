import React from "react";

function Office(props) {
  return (
    <div className="card m-3 p-3" style={{ width: "22rem" }}>
      <img
        src={props.office.Image}
        className="card-img-top"
        alt={props.office.Name}
        height="200"
      />

      <div className="card-body">
        <h4>{props.office.Name}</h4>
<p
  style={{
    color: props.office.Rent < 60000 ? "red" : "green",
    fontWeight: "bold"
  }}
>
  Rent : ₹{props.office.Rent}
</p>
        <p>Address : {props.office.Address}</p>
      </div>
    </div>
  );
}

export default Office;