import React, { memo } from "react";
import styles from "./styles.module.css";

function Card({ movies, apiData }) {
  function chooseClass(vote) {
    if (vote >= 8) {
      return `${styles.green}`;
    } else if (vote >= 5) {
      return `${styles.orange}`;
    } else {
      return `${styles.red}`;
    }
  }
  return (
    <>
      {movies.map((movie, index) => (
        <div className={styles.movieCard} key={index}>
          <div className={styles.poster}>
            <img src={apiData.imgPath + movie.poster_path} alt={movie.title} />
          </div>
          <div className={styles.nameScore}>
            <h3>{movie.title}</h3>
            <span className={chooseClass(movie.vote_average)}>
              {Number(movie.vote_average.toFixed(1))}
            </span>
          </div>
          <div className={styles.description}>
            <p>{movie.overview} </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default memo(Card);
