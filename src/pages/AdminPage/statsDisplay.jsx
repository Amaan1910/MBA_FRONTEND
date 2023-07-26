import { cilBarcode, cilMovie, cilPeople, cilVideo } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CWidgetStatsD } from "@coreui/react";

const StatsDisplay = ({
  selectedItem,
  setSelectedItem,
  movieList,
  bookingList,
  userList,
  theaterList,
}) => {
  return (
    <div className="row mt-3 mb-4">
      <div className="col">
        <CWidgetStatsD
          className="mb-3"
          icon={<CIcon className="my-4" icon={cilMovie} height={52} />}
          style={{ "--cui-card-cap-bg": "#00aced" }}
          values={[{ title: "Movies", value: movieList.length }]}
          color={selectedItem === "movies" ? "success" : undefined}
          onClick={() => setSelectedItem("movies")}
        />
      </div>
      <div className="col">
        <CWidgetStatsD
          className="mb-3"
          icon={<CIcon className="my-4" icon={cilBarcode} height={52} />}
          style={{ "--cui-card-cap-bg": "#00aced" }}
          values={[{ title: "Bookings", value: bookingList.length }]}
          color={selectedItem === "bookings" ? "success" : undefined}
          onClick={() => setSelectedItem("bookings")}
        />
      </div>
      <div className="col">
        <CWidgetStatsD
          className="mb-3"
          icon={<CIcon className="my-4" icon={cilPeople} height={52} />}
          style={{ "--cui-card-cap-bg": "#00aced" }}
          values={[{ title: "Users", value: userList.length }]}
          color={selectedItem === "users" ? "success" : undefined}
          onClick={() => setSelectedItem("users")}
        />
      </div>
      <div className="col">
        <CWidgetStatsD
          className="mb-3"
          icon={<CIcon className="my-4" icon={cilVideo} height={52} />}
          style={{ "--cui-card-cap-bg": "#00aced" }}
          values={[{ title: "Theaters", value: theaterList.length }]}
          onClick={() => setSelectedItem("theaters")}
          color={selectedItem === "theaters" ? "success" : undefined}
        />
      </div>
    </div>
  );
};

export default StatsDisplay;
