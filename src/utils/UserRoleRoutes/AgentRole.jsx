import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const AgentRole = ({ children }) => {
    const { userInfo } = useContext(AuthContext);
    if (userInfo?.role == 'agent') {
        return children;
    }
    return <Navigate to={'/notfound'}></Navigate>;
};

export default AgentRole;