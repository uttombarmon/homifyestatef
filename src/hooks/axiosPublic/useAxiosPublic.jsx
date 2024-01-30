import axios from "axios";

// const axiosPublic = axios.create({baseURL:'http://localhost:5000'})
const axiosPublic = axios.create({baseURL:'https://homifyestate.onrender.com'})
const useAxiosPublic = () => {
    return axiosPublic ;
};

export default useAxiosPublic;