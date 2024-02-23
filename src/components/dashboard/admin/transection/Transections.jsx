import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../hooks/axiosPublic/useAxiosPublic";
import Transection from "./Transection";

function Transections() {
    const [properties, setProperties] = useState(null)
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get('/admin/transections')
            .then(e => {
                setProperties(e.data)
            })
            .catch(e => console.log(e.message))
    }, [axiosPublic])
    return (
        <>
            <div>
                {
                    properties ?
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr className=" text-black font-bold text-lg">
                                        <th>No.</th>
                                        <th>Transection-Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Date</th>
                                        <th>Price</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>
                                {/* row 1 */}
                                <tbody>{
                                    properties.map((d, index) => <Transection index={index} d={d} key={d._id}></Transection>)
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

export default Transections;