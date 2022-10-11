import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import Content from "./Content";

const url = "https://api.unsplash.com/search/photos";
const token = "Client-ID ROIKtpBIySsMOLhgTjdkoiwUa0yjzOlkCMEhK2-E3wQ";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const [deleteIcon, setDeleteIcon] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: token,
        },
        params: {
          query: inputSearch,
          page: 1,
          per_page: 20,
        },
      });

      const transformedMovies = response.data.results.map((movieData) => {
        return {
          id: movieData.id,
          url: movieData.urls.small,
        };
      });

      setMovies(transformedMovies);
    } catch (err) {
      setError(err);
    }
  }, [inputSearch]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const searchChangeHandler = (event) => {
    setInputSearch(event.target.value);
    setDeleteIcon(true);
    setIsTouched(true);
  };

  return (
    <React.Fragment>
      <SearchInput
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        searchChangeHandler={searchChangeHandler}
        deleteIcon={deleteIcon}
        setDeleteIcon={setDeleteIcon}
        setIsTouched={setIsTouched}
      />
      <Content
        error={error}
        movies={movies}
        setError={setError}
        isTouched={isTouched}
      />
    </React.Fragment>
  );
};

export default Search;
