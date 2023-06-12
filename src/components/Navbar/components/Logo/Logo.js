import React from "react";
import styles from "./styles.module.css";
import logo from "./assets/logo.png";

function Logo() {
  return (
    <div className={styles.logoArea}>
      <img src={logo} alt="" id={styles.logoPic} />
      <a href="/" id={styles.logo}>
        MovieLand
      </a>
    </div>
  );
}

export default Logo;
