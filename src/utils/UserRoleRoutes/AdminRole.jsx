import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const AdminRole = ({ children }) => {
    const { userInfo } = useContext(AuthContext);
    if (userInfo?.role == 'admin') {
        return children;
    }
    return <Navigate to={'/notfound'}></Navigate>;
};

export default AdminRole;