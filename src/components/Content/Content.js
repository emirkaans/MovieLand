import React, { memo } from "react";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import Error from "../Error/Error";

function Content({ movies, apiData, isError }) {
  return (
    <div className={styles.container}>
      {movies.map((movie, index) => (
        <Card movieItem={movie} key={index} apiData={apiData} />
      ))}

      {isError ? <Error /> : null}
    </div>
  );
}

export default memo(Content);
