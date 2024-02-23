import { useEffect, useState } from "react";
import Annualreport from "./dashbardcomponent/Annualreport";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";

const AdminDashboard = () => {
    const useAxios = useAxiosPublic();
    const [totals,setTotal]=useState([])
    const [availables,setAvailable]=useState([])
    useEffect(()=>{
        useAxios.get('/admin/availablesold')
        .then(e=>{
            setTotal(e.data.total)
            setAvailable(e.data.available)
        })
        .catch(err=>console.log(err.message))
    },[useAxios])
    return (
        <div className=" px-2">
            {/* property numbers section  */}
            <div className=" grid grid-cols-1 md:grid-cols-3 py-2 gap-5 lg:grid-cols-3">
                {/* Total listing section  */}
                <div className=" py-10 rounded-lg bg-amber-300 text-center">
                    <h1 className=" font-bold text-xl my-4"> Total Property</h1>
                    <p className=" font-semibold text-lg">{totals ? totals?.length :'0' }</p>
                </div>
                {/* available property   */}
                <div className=" py-10 rounded-lg bg-green-300 text-center">
                    <h1 className=" font-bold text-xl my-4"> Total Available</h1>
                    <p className=" font-semibold text-lg">{availables?.length ? availables?.length:0}</p>
                </div>
                {/* sold properties */}
                <div className=" py-10 rounded-lg bg-sky-300 text-center">
                    <h1 className=" font-bold text-xl my-4"> Total Sold</h1>
                    <p className=" font-semibold text-lg">{availables?.length ? totals?.length-availables?.length : 0}</p>
                </div>
            </div>
            {/* annual Report by month chart */}
            <div>
                <Annualreport></Annualreport>
            </div>
        </div>
    );
};

export default AdminDashboard;