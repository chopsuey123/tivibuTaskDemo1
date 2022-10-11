import React, { useState, useEffect } from "react";
import classes from "./Search.module.scss";
import CardItems from "../UI/CardItems";
import axios from "axios";

const url = "https://api.unsplash.com/search/photos";
const token = "Client-ID ROIKtpBIySsMOLhgTjdkoiwUa0yjzOlkCMEhK2-E3wQ";

const Content = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: token,
        },
        params: {
          query: "films",
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

      setPopularMovies(transformedMovies);
    } catch (err) {
      props.setError(err);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  let content = (
    <div>
      <h2 className={classes.popular}>Popular Films</h2>
      <CardItems movies={popularMovies} />
    </div>
  );

  if (props.isTouched && props.movies.length === 0) {
    content = <h2 className={classes.default}>No results...</h2>;
  }

  if (props.movies.length > 0) {
    content = <CardItems movies={props.movies} />;
  }

  if (props.error) {
    content = <p className={classes.error}>Something went wrong!</p>;
  }

  return <section>{content}</section>;
};

export default Content;
