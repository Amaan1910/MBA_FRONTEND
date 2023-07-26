import { toast } from "react-toastify";
import { AxiosInstance } from "../util/axiosInstance";

export const fetchAllMovies = async function () {
  try {
    const { data } = await AxiosInstance.get("/mba/api/v1/movies");
    return data;
  } catch (ex) {
    toast.error(ex.message);
    console.log(ex);
  }
};

export const getMovie = async (id) => {
  try {
    const { data } = await AxiosInstance.get(`/mba/api/v1/movies/${id}`);
    return data;
  } catch (ex) {
    toast.error(ex.message);
    console.log(ex);
  }
};

export const addNewMovie = async (movie) => {
  try {
    const { data } = await AxiosInstance.post(`/mba/api/v1/movies`, movie);
    return data;
  } catch (ex) {
    toast.error(ex.message);
    console.log(ex);
  }
};

export const updateMovieDetails = async (movie) => {
  try {
    const { data } = await AxiosInstance.put(
      `/mba/api/v1/movies/${movie._id}`,
      movie
    );
    return data;
  } catch (ex) {
    toast.error(ex.message);
    console.log(ex);
  }
};

export const removeMovie = async (id) => {
  try {
    await AxiosInstance.delete(`/mba/api/v1/movies/${id}`);
  } catch (ex) {
    toast.error(ex.message);
    console.log(ex);
  }
};
