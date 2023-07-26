import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <div className="col-lg-3 col-xs-6" key={movie._id}>
      <Link to={`/movie/${movie._id}/details`} className="text-decoration-none">
        <div className="d-flex m-2">
          <div className="card bg-dark shadow-lg">
            <div style={{ height: "300px", width: "250px" }}>
              <img
                src={movie.posterUrl}
                className="card-img-top"
                style={{ height: "100%", width: "100%" }}
                alt={movie.name}
              />
            </div>
            <div className="d-flex justify-content-between py-4">
              <span className="text-white fw-bolder px-2">{movie.name}</span>
              <i className="bi bi-hand-thumbs-up-fill text-success px-2  fw-bolder">
                {Math.floor(Math.random() * 30)}k
              </i>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
