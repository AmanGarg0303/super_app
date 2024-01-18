import React, { useEffect, useState } from "react";
import Profile from "../assets/images/profileSmall.png";
import { MovieCard } from "../components/MovieCard";
import axios from "axios";
import requests from "../data/moviesReq";

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const genre = JSON.parse(localStorage.getItem("genre"));

  useEffect(() => {
    const fetchMovies = async () => {
      Promise.all(
        genre.map(async (g) => await axios.get(requests[g]?.url))
      ).then((data) => {
        setMoviesData(data);
      });

      //   const res = await axios.get(requests[""]?.url);
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-black min-h-screen w-full text-white">
      <div className="px-10 py-6 flex justify-between">
        <h1 className="text-[color:var(--green-text)] text-2xl font-semibold">
          Super app
        </h1>
        <img src={Profile} alt="" className="w-14" />
      </div>

      <div className="px-16 pb-20">
        <h6 className="font-semibold text-xl">
          Entertainment according to your choice
        </h6>

        <div className="w-full">
          {moviesData?.map((movies, id) => (
            <div key={id} className="w-full">
              <h2 className="text-3xl font-medium mt-8 mb-3">{genre[id]}</h2>

              <div className="flex overflow-x-scroll scrollbar-hide">
                {movies?.data?.results?.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
