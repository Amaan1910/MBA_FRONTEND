import axios from "axios";
import { API_BASE_URL, API_TIMEOUT } from "../configs/config";

// global settings

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
console.log(API_BASE_URL);
export const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
});

AxiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-access-token"] = token;
  }

  return config;
});
