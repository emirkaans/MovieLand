import React from "react";
import "./Card.css";

function Card(props) {
  function chooseClass(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index}>
          <div className="poster">
            <img
              src={props.apiData.imgPath + movie.poster_path}
              alt={movie.title}
            />
          </div>
          <div className="name-score">
            <h3>{movie.title}</h3>
            <span className={chooseClass(movie.vote_average)}>
              {Number(movie.vote_average.toFixed(1))}
            </span>
          </div>
          <div className="description">
            <p>{movie.overview} </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
