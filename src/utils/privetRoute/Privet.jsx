import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { PropagateLoader } from "react-spinners";


function Private({children}) {
    const {user,loading}= useContext(AuthContext)
    console.log(user);
    const location = useLocation()
    if (loading) {
        return <p className=" w-full items-center text-center h-screen flex justify-center"><span> <PropagateLoader color="#36d7b7" /></span></p>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/signup'} state={{from:location}}></Navigate>;
}

export default Private;