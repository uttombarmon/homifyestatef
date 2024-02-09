import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../hooks/axiosPublic/useAxiosPublic";
import User from "./User";

function ManageUsers() {
    const [users, setUser] = useState(null)
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get('/users/all/users')
            .then(e => {
                setUser(e.data)
                console.log(e.data);
            })
            .catch(e => console.log(e.message))
    }, [axiosPublic])
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
                                    users?.map((d,index )=> <User index={index} d={d} key={d._id}></User>)
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