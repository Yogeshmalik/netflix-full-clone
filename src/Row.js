import React, { useState, useEffect } from "react";
import axios from "./axios"; //if exporting default you can use any name like instance from './axios'
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) /*using props*/ {
  const [movies, setMovies] = useState([]); //start with empty array
  const [trailerUrl, setTrailerUrl] = useState(""); //start with empty string

  //a snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //asynchronous function is used to fetch data from 3rd party source
    async function fetchData() {
      //await means if you make a request wait for that to come back and then do something
      const request = await axios.get(fetchUrl);
      //"https://api.themoviedb.org/3"
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // if [] is blank means run once when row loads and dont run again.
  /* ALSO if we including external thing inside useEffect then we should include that in []. 
  using a variable that has been passed from outside. we need to tell useEffect that.
  that way it knows it needs to refile the code */
  // console.log(movies);
  /* const opts you can find on npm youtube site */
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      /* if the trailerUrl is already open then close it when we click on the movie poster */
      setTrailerUrl(""); /* sets the trailerUrl as empty */
    } else {
      /* not all the trailers wil lbe loaded because of the incompatibility of TMDB and Youtube/netflix  */
      movieTrailer(movie?.name || "")
        /* '' is because sometimes name is undefined */
        .then((url) => {
          /* youtube.com/watch?v=XtMThy8QKqU in the url, we need the value of v. like here v=XtMThy8QKqU */
          const urlParams = new URLSearchParams(new URL(url).search);
          /* this will give us everything after '?' and wrapping new URL(url).search will allow us to get 'get */
          console.log("urlParamsn= " + urlParams);
          setTrailerUrl(urlParams.get("v")); /* v is the video ID */
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/*several row posters*/}
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            /*key will render the selected item and not the whole page for efficiency using unique ID*/
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            /* in above line everything gets row_poster class but($()) if it's a large row then im gonna give it row_posterLarge */
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
