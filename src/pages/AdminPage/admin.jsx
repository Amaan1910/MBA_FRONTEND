import { useEffect, useState } from "react";
import { fetchAllBookings } from "../../api/booking";
import { fetchAllMovies } from "../../api/movie";
import { fetchAllTheatres } from "../../api/theatre";
import { fetchAllUsers } from "../../api/user";
import Navbar from "../../components/Navbar";
import { ADMIN } from "../../constants";
import BookingTable from "./bookingTable";
import MovieTable from "../../components/movieTable";
import StatsDisplay from "./statsDisplay";
import TheatreTable from "../../components/theatreTable";
import UserModal from "./userModal";
import UserTable from "./userTable";

const Admin = () => {
  const [selectedItem, setSelectedItem] = useState("movies");
  const [bookingList, setBookingList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [theaterList, setTheaterList] = useState([]);
  const [userList, setUserList] = useState([]);

  async function fetchUsers() {
    const users = await fetchAllUsers();
    setUserList(users);
  }
  async function fetchBookings() {
    const bookings = await fetchAllBookings();
    setBookingList(bookings);
  }

  async function fetchTheaters() {
    const theatres = await fetchAllTheatres();
    setTheaterList(theatres);
  }

  async function fetchMovies() {
    const movies = await fetchAllMovies();
    setMovieList(movies);
  }

  useEffect(() => {
    fetchBookings();
    fetchTheaters();
    fetchMovies();
    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container bg-light">
        <h3 className="text-center mt-2">Welcome, Admin!</h3>
        <p className="text-center text-secondary">
          Take a quick look at the stats below
        </p>

        <StatsDisplay
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          movieList={movieList}
          bookingList={bookingList}
          userList={userList}
          theaterList={theaterList}
        />
        {selectedItem === "movies" && (
          <MovieTable
            movieList={movieList}
            userType={ADMIN}
            setMovieList={setMovieList}
          />
        )}
        {selectedItem === "theaters" && (
          <TheatreTable
            theaterList={theaterList}
            userType={ADMIN}
            movieList={[]}
            setTheaterList={setTheaterList}
          />
        )}
        {selectedItem === "bookings" && (
          <BookingTable bookingList={bookingList} />
        )}
        {selectedItem === "users" && (
          <UserTable userList={userList} setUserList={setUserList} />
        )}
      </div>
    </>
  );
};

export default Admin;
