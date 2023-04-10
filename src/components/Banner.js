import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import requests from "../api/request";
import styled from "styled-components";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

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

  if (!isClicked) {
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
            <button
              className="banner_button play"
              onClick={() => setIsClicked(true)}
            >
              Play
            </button>
            <button className="banner_button info">
              <div className="space"></div> More Information
            </button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 100)}
          </h1>
        </div>
        <div className="banner_fadeBottom" />
      </header>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            width="640"
            height={360}
            frameborder="0"
            allow="autoplay; fullscreen"
          ></Iframe>
        </HomeContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Banner;
