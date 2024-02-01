import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/axiosPublic/useAxiosPublic";

function Property({ d, index }) {
    const { title, location, agent, price, verification_status } = d
    const navigate =useNavigate()
    const axiosPublic = useAxiosPublic()
    const verifyProperties = () => {
        axiosPublic.patch(`/verifyproperty?id=${d._id}`)
            .then(() => {
                navigate('/dashboard/manageproperties')
                // toast.success("Verified Successfull!")
            })
            .catch(e => console.log(e.message))
    }
    
    const rejectProperty = () => {
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
                <td>{agent?.name}</td>
                <td>{agent?.email}</td>
                <td>{price}</td>
                <td>{
                    verification_status === "verified" ?
                        <span>{verification_status}</span> :
                        verification_status === "pending" ?
                        <button onClick={verifyProperties} className=" btn btn-info">Verify</button>:
                        <span>{verification_status}</span>
                }</td>
                <td><button onClick={rejectProperty} className={`btn btn-error ${verification_status === 'rejected' && 'btn-disabled'} ${verification_status == "verified" && 'btn-disabled'} `}>Reject</button></td>
            </tr>
        </>
    );
}

export default Property;