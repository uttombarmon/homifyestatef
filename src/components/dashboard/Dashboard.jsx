import { useContext} from "react";
import AdminDashboard from "./admin/AdminDashboard";
import { AuthContext } from "../../utils/provider/AuthProvider";

const Dashboard = () => {
    const { userInfo } = useContext(AuthContext)
    return (
        <div>{userInfo?.role == 'admin' &&
            <AdminDashboard></AdminDashboard>
        }
        </div>
    );
};

export default Dashboard;