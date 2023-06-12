import React from "react";
import styles from "./styles.module.css";

function Error() {
  return (
    <div className={styles.error}>
      <h2 className={styles.errorMessage}>
        The movie you were looking for was not found. Please try different
        keywords.
      </h2>
    </div>
  );
}

export default Error;
