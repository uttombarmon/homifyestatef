import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../hooks/axiosPublic/useAxiosPublic";
import User from "./User";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ManageUsers() {
    const [users, setUser] = useState(null)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    useEffect(() => {
        axiosPublic.get('/users/all/users')
            .then(e => {
                setUser(e.data)
                console.log(e.data);
            })
            .catch(e => console.log(e.message))
    }, [axiosPublic])
    const handleDelete = (id) => {
        axiosPublic.delete(`/users/all/deleteuser?id=${id}`)
            .then(() => {
                toast.success("Deleted User!")
                const datas = users.filter(d => d._id !== id)
                setUser(datas)
            })
            .catch(e => console.log(e.message))
    }
    const makeAdmin = (id) => {
        axiosPublic.patch(`/users/all/makeadmin?id=${id}`)
        .then(()=>{
            toast.success("Make Admin Successfull!")
            setUser(users)
            navigate('/dashboard/manageusers')
        })
        .catch(e=> console.log(e.message))
    }
    return (
        <>
            <div>
                {
                    users ?
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Make Admin</th>
                                        <th>Make Agent</th>
                                        <th>Mark Fraud</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                {/* row 1 */}
                                <tbody>{
                                    users?.map((d, index) => <User handleDelete={handleDelete} makeAdmin={makeAdmin} index={index} d={d} key={d._id}></User>)
                                }
                                </tbody>
                            </table>
                        </div>
                        :
                        <span className=" w-full h-screen flex justify-center"><span className=" self-center loading loading-bars loading-lg"></span></span>
                }
            </div>
        </>
    );
}

export default ManageUsers;