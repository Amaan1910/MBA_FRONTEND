import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import { AxiosInstance } from "../../util/axiosInstance";
import Loader from "./../../assets/load.gif";

const LandingPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchAllMovies() {
    try {
      setIsLoading(true);
      const { data } = await AxiosInstance.get("/mba/api/v1/movies");
      setMovieList(data);
    } catch (ex) {
      console.log(ex);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <>
      <Navbar />
      <Slider />
      {!isLoading ? (
        <div className="container my-4">
          <p className="fw-bolder">Recommended movies</p>
          <div className="row">
            {movieList.map((movie) => (
              <Movie movie={movie} key={movie._id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <img src={Loader} alt="Loading..." />
        </div>
      )}
    </>
  );
};

export default LandingPage;
