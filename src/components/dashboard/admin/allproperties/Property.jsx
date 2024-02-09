import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/axiosPublic/useAxiosPublic";

function Property({ d, index }) {
    const { title, location, author, property_details } = d
    const navigate =useNavigate()
    const axiosPublic = useAxiosPublic()
    const removeProperty = () => {
        axiosPublic.patch(`/rejectproperty?id=${d._id}`)
            .then(() => {
                navigate('/dashboard/manageproperties')
                // toast.success("Property Rejected!")
            })
            .catch(e => console.log(e.message))
    }

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{title}</td>
                <td>{location}</td>
                <td>{author?.contact}</td>
                <td>{property_details?.price}</td>
                <td><button onClick={removeProperty} className={`btn btn-error`}>Remove</button></td>
            </tr>
        </>
    );
}

export default Property;