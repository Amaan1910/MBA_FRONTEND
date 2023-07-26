import MaterialTable from "@material-table/core";
import { Add, Delete, Edit } from "@material-ui/icons";
import { useState } from "react";
import { ADMIN } from "../constants";
import TheatreModal from "./theatreModal";
import { AxiosInstance } from "../util/axiosInstance";

const TheatreTable = ({ theaterList, movieList, userType, setTheaterList }) => {
  const [theatreDetail, setTheatreDetail] = useState({});
  const [showAddTheatreModal, setShowAddTheatreModal] = useState(false);
  const [showEditTheatreModal, setShowEditTheatreModal] = useState(false);

  const resetState = () => {
    setShowEditTheatreModal(false);
    setShowAddTheatreModal(false);
    setShowEditTheatreModal(false);

    setTheatreDetail({});
  };

  const editTheatre = (theatre) => {
    setTheatreDetail(theatre);
    setShowEditTheatreModal(true);
  };

  const deleteTheatre = async (theatre) => {
    console.log(theatre);

    const deleteUrl = `/mba/api/v1/theatres/${theatre._id}`;

    try {
      await AxiosInstance.delete(deleteUrl);

      const updatedTheatreList = theaterList.filter(
        (m) => m._id !== theatre._id
      );
      setTheaterList(updatedTheatreList);
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  const addTheatre = (theatre) => {
    setTheatreDetail({});
    setShowAddTheatreModal(true);
  };

  const changeTheatreDetails = (event) => {
    setTheatreDetail({
      ...theatreDetail,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <MaterialTable
        title="Theaters"
        data={theaterList}
        columns={[
          {
            title: "Name",
            field: "name",
          },
          {
            title: "City",
            field: "city",
          },
          {
            title: "Description",
            field: "description",
          },
          {
            title: "Pin Code",
            field: "pinCode",
          },
        ]}
        actions={[
          {
            icon: Delete,
            tooltip: "Delete Theater",
            onClick: (event, rowData) => deleteTheatre(rowData),
          },
          {
            icon: Edit,
            tooltip: "Edit Theater",
            onClick: (event, rowData) => editTheatre(rowData),
          },
          ...(userType === ADMIN
            ? [
                {
                  icon: Add,
                  tooltip: "Add Theater",
                  isFreeAction: true,
                  onClick: (event) => addTheatre(),
                },
              ]
            : []),
        ]}
      />
      <TheatreModal
        showAddTheatreModal={showAddTheatreModal}
        showEditTheatreModal={showEditTheatreModal}
        resetState={resetState}
        editTheatre={editTheatre}
        addTheatre={addTheatre}
        theatreDetail={theatreDetail}
        changeTheatreDetails={changeTheatreDetails}
        userType={userType}
        movieList={movieList}
      />
    </>
  );
};

export default TheatreTable;
