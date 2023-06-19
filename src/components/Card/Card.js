import React, { memo } from "react";
import styles from "./styles.module.css";

function Card({ movieItem, apiData }) {
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
    <div className={styles.movieCard}>
      <div className={styles.poster}>
        <img
          src={apiData.imgPath + movieItem.poster_path}
          alt={movieItem.title}
        />
      </div>
      <div className={styles.nameScore}>
        <h3>{movieItem.title}</h3>
        <span className={chooseClass(movieItem.vote_average)}>
          {Number(movieItem.vote_average.toFixed(1))}
        </span>
      </div>
      <div className={styles.description}>
        <p>{movieItem.overview} </p>
      </div>
    </div>
  );
}

export default memo(Card);
