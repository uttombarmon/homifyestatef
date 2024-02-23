import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../utils/provider/AuthProvider";
import { useNavigate } from "react-router-dom";

// const axiosPrivate = axios.create({ baseURL: "http://localhost:5000",withCredentials:true})
const axiosPrivate = axios.create({ baseURL: "https://homifyestates.vercel.app",withCredentials:true})
const useAxiosPrivate = () => {
 const {signout} = useContext(AuthContext);
 const navigation = useNavigate();
    axiosPrivate.interceptors.request.use(response=>{
        return response;
    },
        (error) => {
            if(error.response.status == 401 || error.response.status == 403){
                signout()
                .then(()=>{
                    navigation('/signin')
                })
                .catch((error)=>{console.log(error.message)})
            }
        }
    )




    return axiosPrivate;
};

export default useAxiosPrivate;