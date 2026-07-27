import React from "react";
import Office from "./Office";

function App() {

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore",
      Image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2"
    },
    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Hyderabad",
      Image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7"
    }
  ];

  return (
    <div className="container">

      <h1 className="text-center mt-3">
        Office Space Rental App
      </h1>

      <div className="d-flex flex-wrap">

        {
          offices.map((office, index) => (
            <Office key={index} office={office} />
          ))
        }

      </div>

    </div>
  );
}

export default App;