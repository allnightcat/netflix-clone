import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import requests from "../api/request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const getData = async () => {
    // 현재 상영중인 영화 정보 가져오기(여러개 영화)
    const request = await axios.get(requests.fetchNowPlaying);

    // 불러온 영화중 랜덤 id 1개 가져오기
    const random_id = Math.floor(Math.random() * request.data.results.length);
    const movie_id = request.data.results[random_id].id;

    // 가져온 id의 상세 영화 정보 가져오기
    const { data: movieDetail } = await axios.get(`movie/${movie_id}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button info">
            <div className="space"></div> More Information
          </button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 100)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
