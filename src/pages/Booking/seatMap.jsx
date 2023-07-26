import "./booking.css";

const SeatMap = ({
  selectedSeats,
  occupiedSeats,
  numSeats,
  setSelectedSeats,
}) => {
  if (!numSeats) {
    return null;
  }

  const SEATS = Array(numSeats)
    .fill(0)
    .map((el, index) => index + 1);

  console.log(SEATS);

  function handleClick(isSelected, isOccupied, seatId) {
    if (isOccupied) {
      return;
    }

    if (isSelected) {
      setSelectedSeats(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seatId)
      );
      return;
    }

    if (!isSelected) {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  }

  return (
    <div className="cinema">
      <div className="screen" />
      <div className="seats">
        {SEATS.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = occupiedSeats.includes(seat);

          return (
            <span
              key={seat}
              className={`seat ${
                isSelected ? "selected" : isOccupied ? "occupied" : ""
              }`}
              onClick={() => handleClick(isSelected, isOccupied, seat)}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default SeatMap;
