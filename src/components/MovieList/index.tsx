"use client";

import { Movie } from "@/types/movie";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "c5a976b1355e5b1ee49c2f1da44451d9",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  };

  return (
    <ul className="
          grid
          grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]
          gap-4
          w-full
    ">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
        />
      ))}
    </ul>
  );
}
