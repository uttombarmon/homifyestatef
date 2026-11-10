import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL || "";

const axiosPublic = axios.create({
  baseURL: apiBaseUrl,
  timeout: 8000,
});

axiosPublic.interceptors.request.use(
  (config) => {
    if (!apiBaseUrl) {
      return Promise.reject(new Error("API base URL not configured."));
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosPublic.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!apiBaseUrl) {
      return Promise.resolve({ data: [] });
    }
    return Promise.reject(error);
  },
);

const useAxiosPublic = () => axiosPublic;

export default useAxiosPublic;
