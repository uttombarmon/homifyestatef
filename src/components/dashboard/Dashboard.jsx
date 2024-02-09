import { useContext, useEffect, useState } from "react";
import AdminDashboard from "./admin/AdminDashboard";
import { AuthContext } from "../../utils/provider/AuthProvider";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [users, setUser] = useState(null)
    const axiosPublic = useAxiosPublic()
    //get user data from server
    useEffect(() => {
        const email = user?.email;
        console.log(email);
        if (email !== null && email !== undefined) {
            axiosPublic.get(`/users/${email}`)
                .then(res => {
                    const userInfo = res.data
                    console.log("role:",userInfo.role);
                    setUser(userInfo);
                })
        }

    }, [axiosPublic, user]);
    return (
        <div>{users?.role == 'admin' &&
            <AdminDashboard></AdminDashboard>
        }
        </div>
    );
};

export default Dashboard;