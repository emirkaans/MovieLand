import React from "react";
import styles from "./styles.module.css";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";

function Navbar({ setIsToggledSearch, searchValue, setSearchValue }) {
  return (
    <div className={styles.header}>
      <Logo />
      <Search
        setIsToggledSearch={setIsToggledSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
}

export default Navbar;
