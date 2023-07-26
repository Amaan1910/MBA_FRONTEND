import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../api/movie";
import { getTheatre } from "../../api/theatre";
import { Legend } from "./legend";
import Navbar from "../../components/Navbar";
import SeatMap from "./seatMap";
import { TICKET_PRICE } from "../../constants";
import "./booking.css";
import Payment from "./payment";

const Booking = () => {
  const { movieId, theatreId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [theatreDetails, setTheatreDetails] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);

  // TODO remove after sometime
  const occupiedSeats = [10, 12, 50, 33, 28, 47];

  async function fetchMovieDetails(id) {
    const data = await getMovie(id);
    setMovieDetails(data);
  }

  async function fetchTheatreDetails(id) {
    const data = await getTheatre(id);
    setTheatreDetails(data);
  }

  useEffect(() => {
    fetchMovieDetails(movieId);
    fetchTheatreDetails(theatreId);
  }, []);

  return (
    <>
      <Navbar />
      <h2 className="fw-bold text-center m-2">
        {movieDetails.name} in {theatreDetails.name}
      </h2>
      <Legend />
      <SeatMap
        occupiedSeats={occupiedSeats}
        selectedSeats={selectedSeats}
        numSeats={theatreDetails.numSeats}
        setSelectedSeats={setSelectedSeats}
      />
      {selectedSeats.length > 0 && (
        <>
          <h5 className="text-center">
            You have selected{" "}
            <span className="count">{selectedSeats.length}</span> seats for the
            price of{" "}
            <span className="total">
              ₹{selectedSeats.length * TICKET_PRICE}
            </span>
          </h5>
          <div className="text-center mt-5">
            <Payment
              movie={movieDetails}
              theatre={theatreDetails}
              noOfSeats={selectedSeats.length}
              totalCost={selectedSeats.length * TICKET_PRICE}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Booking;
