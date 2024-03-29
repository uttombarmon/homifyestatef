import { useEffect, useState } from "react";
import Property from "./Property";
import useAxiosPublic from "../../../../hooks/axiosPublic/useAxiosPublic";
import toast from "react-hot-toast";

function Allproperties() {
    const [properties, setProperties] = useState(null)
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get('/home/allcheckout')
            .then(e => {
                setProperties(e.data)
            })
            .catch(e => console.log(e.message))
    }, [axiosPublic])
    const deleteProperty = (id)=>{
        axiosPublic.delete(`/admin/property/delete?id=${id}`)
        .then(e=>{
            if (e.data.deletedCount) {
                const datas = properties.filter(d => d._id !== id)
                setProperties(datas)
                toast.success('Successfuly, Property removed')
            }
        })
    }
    return (
        <>
            <div>
                {
                    properties ?
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>title</th>
                                        <th>Location</th>
                                        <th>Agent Email</th>
                                        <th>Price</th>
                                        <th>Reject</th>
                                    </tr>
                                </thead>
                                {/* row 1 */}
                                <tbody>{
                                    properties.map((d,index )=> <Property deleteProperty={deleteProperty} index={index} d={d} key={d._id}></Property>)
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

export default Allproperties;