import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const UserRole = ({ children }) => {
    const { userInfo } = useContext(AuthContext);
    if (userInfo?.role == 'user') {
        return children;
    }
    return <Navigate to={'/notfound'}></Navigate>;
};

export default UserRole;