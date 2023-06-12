import React, { useRef, memo } from "react";
import styles from "./styles.module.css";

function Search({ setIsToggledSearch, searchValue, setSearchValue }) {
  const inputRef = useRef();

  function getSearchValue(val) {
    setSearchValue(val.target.value);
  }

  function renderSearch(e) {
    e.preventDefault();

    // Focus Input
    inputRef.current.focus();

    // Render Search
    if (searchValue) {
      setIsToggledSearch((isToggled) => !isToggled);
    }
  }

  return (
    <div className={styles.searchArea}>
      <form id={styles.form}>
        <input
          type="text"
          className={styles.search}
          placeholder="Movie"
          onChange={getSearchValue}
          ref={inputRef}
        />
        <button id={styles.btnSearch} type="submit" onClick={renderSearch}>
          Search
        </button>
      </form>
    </div>
  );
}

export default memo(Search);
