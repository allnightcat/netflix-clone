import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({ title, id, isLargeRow, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovieData();
  }, [fetchUrl]);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    console.log(request.data.results);
    return request;
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider-arrow-left">
          <span className="arrow">{"<"}</span>
        </div>
        <div id={id} className="row-posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              className={`row-poster ${isLargeRow && "row-posterLarge"}`}
              alt={movie.name}
            />
          ))}
        </div>
        <div className="slider-arrow-right">
          <span className="arrow">{">"}</span>
        </div>
      </div>
    </section>
  );
}

export default Row;
