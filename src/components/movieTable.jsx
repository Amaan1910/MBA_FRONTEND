import MaterialTable from "@material-table/core";
import { Add, Delete, Edit } from "@material-ui/icons";
import { useState } from "react";
import { ADMIN } from "../constants";
import MovieModal from "./movieModal";
import { removeMovie } from "../api/movie";
import { AxiosInstance } from "../util/axiosInstance";

const MovieTable = ({ movieList, userType, setMovieList }) => {
  const [movieDetail, setMovieDetail] = useState({});
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);
  const [showEditMovieModal, setShowEditMovieModal] = useState(false);

  const addMovie = (theatre) => {
    setMovieDetail({});
    setShowAddMovieModal(true);
  };

  const editMovie = (movie) => {
    setMovieDetail(movie);
    setShowEditMovieModal(true);
  };

  const deleteMovie = async (movie) => {
    console.log(movie);

    const deleteUrl = `/mba/api/v1/movies/${movie._id}`;

    try {
      await AxiosInstance.delete(deleteUrl);

      const updatedMovieList = movieList.filter((m) => m._id !== movie._id);
      setMovieList(updatedMovieList);
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  const changeMovieDetails = (event) => {
    setMovieDetail({
      ...movieDetail,
      [event.target.name]: event.target.value,
    });
  };

  const resetState = () => {
    setShowEditMovieModal(false);
    setShowAddMovieModal(false);
    setShowEditMovieModal(false);

    setMovieDetail({});
  };

  return (
    <>
      <MaterialTable
        title="Movies"
        data={movieList}
        columns={[
          {
            title: "Poster",
            field: "posterUrl",
            render: (rowData) => (
              <img src={rowData.posterUrl} alt="" height="100" width="80" />
            ),
          },
          {
            title: "Name",
            field: "name",
          },
          {
            title: "Director",
            field: "director",
          },
          {
            title: "Release Date",
            field: "releaseDate",
          },
          {
            title: "Release Status",
            field: "releaseStatus",
          },
        ]}
        actions={
          userType === ADMIN
            ? [
                {
                  icon: Delete,
                  tooltip: "Delete Movie",
                  onClick: (rowData) => deleteMovie(rowData),
                },
                {
                  icon: Edit,
                  tooltip: "Edit Movie",
                  onClick: (event, rowData) => editMovie(rowData),
                },
                {
                  icon: Add,
                  tooltip: "Add Movie",
                  isFreeAction: true,
                  onClick: (event) => addMovie(),
                },
              ]
            : []
        }
      />
      <MovieModal
        showAddMovieModal={showAddMovieModal}
        showEditMovieModal={showEditMovieModal}
        resetState={resetState}
        editMovie={editMovie}
        addMovie={addMovie}
        movieDetail={movieDetail}
        changeMovieDetails={changeMovieDetails}
      />
    </>
  );
};

export default MovieTable;
