import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Film.module.scss";
import { useParams } from "react-router-dom";
import VideoJs from "./Video.js";
import { useHistory } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const token = "Client-ID ROIKtpBIySsMOLhgTjdkoiwUa0yjzOlkCMEhK2-E3wQ";

const Film = () => {
  const [chosenMovie, setChosenMovie] = useState({});
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState(null);
  const params = useParams();
  const history = useHistory();

  const url = "https://api.unsplash.com/photos/" + `${params.id}`;

  const fetchChosenMovie = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: token,
        },
      });
      
      const touchedMovie = response.data;

      setChosenMovie(touchedMovie);
      setPhotoUrl(touchedMovie.urls.small);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchChosenMovie();
  }, []);

  const handleClick = () => history.push("/");

  return (
    <div className={classes.container}>
      <div>
        <button type="button" onClick={handleClick}>
          <TiArrowBack style={{ color: "white", fontSize: "50px" }} />
        </button>
      </div>
      <VideoJs />
      <div className={classes.info}>
        <img alt={chosenMovie.alt_description} src={photoUrl}></img>
        <div className={classes.description}>
          <h1>{chosenMovie.id}</h1>
          <h2>{chosenMovie.alt_description}</h2>
          <h3>{chosenMovie.created_at}</h3>
        </div>
        {error && <p>Something went wrong!</p>}
      </div>
    </div>
  );
};

export default Film;
