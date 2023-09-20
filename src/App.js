import "./styles.css";
import React from "react";
import { useState } from "react";
const travelSpots = {
  Bengaluru: [
    { name: "Vidhan Soudha", rating: "4/5" },
    { name: "Cubbon Park", rating: "3.5/5" }
  ],

  Mangalore: [
    {
      name: "Panambur beach",
      rating: "5/5"
    },
    {
      name: "Kadri Temple",
      rating: "4.5/5"
    }
  ],
  Mysore: [
    {
      name: "Palace",
      rating: "3.5/5"
    },
    {
      name: "Zoo",
      rating: "5/5"
    }
  ]
};

export default function App() {
  function getBengaluruSpots() {}

  return (
    <div className="App">
      <h1>Karnataka Tourist Guide </h1>
      <p>Click on a City below to know its top travel spots</p>

      <button className="placeButton" onClick={getBengaluruSpots}>
        {" "}
        Bengaluru
      </button>
      <button className="placeButton">Mangalore</button>
      <button className="placeButton">Mysore</button>

      <hr />
    </div>
  );
}
