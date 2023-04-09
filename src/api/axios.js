import axios from "axios";

const instance = axios.create({
  baseURL: "https://themoviedb.org/3",
  params: {
    api_key: process.env.MOVIE_API_KEY,
    language: "ko-KR",
  },
});

export default instance;
