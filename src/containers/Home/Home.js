import React, { useState, useEffect } from "react";
import "./styles.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Content from "../../components/Content/Content";

const apiData = {
  apiUrl:
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2",
  imgPath: "https://image.tmdb.org/t/p/w1280",
  searchApi:
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="',
};

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isToggledSearch, setIsToggledSearch] = useState(false);
  const [isError, setIsError] = useState(false);

  const getMovies = async (searchValue) => {
    // Check Search Value
    const url = searchValue ? apiData.searchApi + searchValue : apiData.apiUrl;

    const response = await fetch(url);
    const data = await response.json();

    // Check Search Results
    data.results.length === 0 ? setIsError(true) : setIsError(false);

    // Set Movies
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [isToggledSearch]);

  return (
    <>
      <Navbar
        setIsToggledSearch={setIsToggledSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Content movies={movies} apiData={apiData} isError={isError} />
    </>
  );
}

export default Home;
