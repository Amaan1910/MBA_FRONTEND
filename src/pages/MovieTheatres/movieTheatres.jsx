import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovie } from "../../api/movie";
import { fetchAllTheatres } from "../../api/theatre";
import MovieAttributes from "../../components/movieAttributes";
import Navbar from "../../components/Navbar";

const MovieTheatres = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [theaterList, setTheatreList] = useState([]);

  async function fetchScreeningTheatres() {
    const theatres = await fetchAllTheatres();
    const filteredData = theatres.filter((theatre) =>
      theatre.movies.includes(movieId)
    );
    setTheatreList(filteredData);
  }

  async function fetchMovieDetails() {
    const data = await getMovie(movieId);
    setMovieDetails(data);
  }

  useEffect(() => {
    fetchScreeningTheatres();
    fetchMovieDetails();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="bg-black text-center py-3 backg">
          <h2 className="fw-bolder text-light">{movieDetails.name}</h2>
          <MovieAttributes
            description={movieDetails.description}
            language={movieDetails.language}
            releaseStatus={movieDetails.releaseStatus}
          />
          <hr className="bg-light" />
          <h5 className="text-white">{movieDetails.director}</h5>
          <h5 className="text-white">{movieDetails.releaseDate}</h5>
        </div>
      </div>

      <div className="container my-3 vh-100">
        <h2 className="fw-bold text-dark text-center my-5">Select Theatre</h2>

        {theaterList.map((theatre) => (
          <li
            key={theatre._id}
            className="list-group-item p-2"
            style={{
              border: "1px solid lightgray",
              borderRadius: "5px",
              margin: "5px",
            }}
          >
            <Link
              to={`/movie/${movieId}/${theatre._id}`}
              className={"fw-bold text-dark text-decoration-none"}
            >
              <div className="row">
                <div className="col">{theatre.name}</div>
                <div className="col">
                  <div className="p-2 text-success fw-bold">
                    <i className="bi bi-phone-fill text-success"></i>
                    m-Ticket
                  </div>
                </div>
                <div className="col">
                  <div className="p-2 text-danger fw-bold">
                    <i className="bi bi-cup-straw text-danger"></i>
                    Food and Beverages
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default MovieTheatres;
