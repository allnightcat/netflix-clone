import axios from "../../api/axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  let { movieId } = useParams();
  const [movies, setMovies] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      setMovies(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movies) return <div>...loading</div>;
  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
}

export default DetailPage;
