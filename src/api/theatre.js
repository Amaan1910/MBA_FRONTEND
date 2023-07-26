import { toast } from "react-toastify";
import { AxiosInstance } from "../util/axiosInstance";

export const fetchAllTheatres = async function () {
  try {
    const { data } = await AxiosInstance.get("/mba/api/v1/theatres");
    return data;
  } catch (ex) {
    toast.error("Error in fetching theatres");
  }
};

export const getTheatre = async (id) => {
  try {
    const { data } = await AxiosInstance.get(`/mba/api/v1/theatres/${id}`);
    console.log(data);
    return data;
  } catch (ex) {
    toast.error(ex.message);
    console.log(ex);
  }
};

export const addNewTheatre = async (theatre) => {
  try {
    const { data } = await AxiosInstance.post(`/mba/api/v1/theatres`, theatre);
    return data;
  } catch (ex) {
    toast.error(ex.message);
    console.log(ex);
  }
};

export const updateTheatreDetails = async (theatre) => {
  try {
    const { data } = await AxiosInstance.put(
      `/mba/api/v1/theatres/${theatre._id}`,
      theatre
    );
    return data;
  } catch (ex) {
    toast.error(ex.message);
    console.log(ex);
  }
};

export const removeTheatre = async (id) => {
  try {
    await AxiosInstance.delete(`/mba/api/v1/theatres/${id}`);
  } catch (ex) {
    toast.error(ex.message);
    console.log(ex);
  }
};

export const updateMovieInTheatre = async (movieData, theatre) => {
  try {
    const { data } = await AxiosInstance.put(
      `/mba/api/v1/theatres/${theatre._id}/movies`,
      movieData
    );
    return data;
  } catch (ex) {
    toast.error(ex.message);
    console.log(ex);
  }
};
