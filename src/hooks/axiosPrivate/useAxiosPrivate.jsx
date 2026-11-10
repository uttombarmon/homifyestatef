import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../utils/provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const apiBaseUrl = import.meta.env.VITE_API_URL || "";

const axiosPrivate = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  timeout: 8000,
});

const useAxiosPrivate = () => {
  const { signout } = useContext(AuthContext);
  const navigation = useNavigate();

  axiosPrivate.interceptors.request.use(
    (config) => {
      if (!apiBaseUrl) {
        return Promise.reject(new Error("API base URL not configured."));
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  axiosPrivate.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!apiBaseUrl) {
        return Promise.resolve({ data: [] });
      }

      if (error?.response?.status === 401 || error?.response?.status === 403) {
        signout()
          .then(() => {
            navigation("/signin");
          })
          .catch((err) => {
            console.log(err.message);
          });
      }

      return Promise.reject(error);
    },
  );

  return axiosPrivate;
};

export default useAxiosPrivate;
