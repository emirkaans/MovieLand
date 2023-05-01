import React from "react";
import "./Card.css";
import Card from "./Card";

function Cards(props) {
  return (
    <div className="container">
      <Card movies={props.movies} apiData={props.apiData} />
    </div>
  );
}

export default Cards;
