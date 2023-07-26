import { useEffect, useState } from "react";
import { fetchAllMovies } from "../../api/movie";
import { fetchAllTheatres } from "../../api/theatre";
import { CLIENT, CUSTOMER } from "../../constants";
import MovieTable from "../../components/movieTable";
import TheatreTable from "../../components/theatreTable";
import Navbar from "../../components/Navbar";

const Client = () => {
  const [movieList, setMovieList] = useState([]);
  const [theaterList, setTheaterList] = useState([]);

  async function fetchTheaters() {
    const theatres = await fetchAllTheatres();
    setTheaterList(theatres);
  }

  async function fetchMovies() {
    const movies = await fetchAllMovies();
    setMovieList(movies);
  }

  useEffect(() => {
    fetchTheaters();
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <TheatreTable
          theaterList={theaterList}
          userType={CLIENT}
          movieList={movieList}
        />
        <div className="mt-5">
          <MovieTable movieList={movieList} userType={CLIENT} />
        </div>
      </div>
    </>
  );
};

export default Client;
