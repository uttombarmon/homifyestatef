import axios from "axios";

// const axiosPublic = axios.create({baseURL:'https://homifyestate.onrender.com'})
const axiosPublic = axios.create({
  baseURL: "https://homifyestates.vercel.app",
});
// const axiosPublic = axios.create({ baseURL: "https://homifyestates.vercel.app" });

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
