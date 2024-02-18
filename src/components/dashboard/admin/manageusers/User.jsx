import useAxiosPublic from "../../../../hooks/axiosPublic/useAxiosPublic"
import toast from "react-hot-toast";

function User({d,index}) {
    const {name,email,role} = d
    const axiosPublic = useAxiosPublic()
    
    const makeAdmin=()=>{
        axiosPublic.patch(`/users/all/makeadmin?id=${d._id}`)
        .then(()=>{
            toast.success("Make Admin Successfull!")
        })
        .catch(e=> console.log(e.message))
    }
    const makeAgent=()=>{
        axiosPublic.patch(`/users/all/makeagent?id=${d._id}`)
        .then(()=>{
            toast.success("Make Agent Successfull!")
        })
        .catch(e=> console.log(e.message))
    }
    const markFraud=()=>{
        axiosPublic.patch(`/users/all/makefraud?id=${d._id}`)
        .then(()=>{
            toast.success("Marked Fraud Successfull!")
        })
        .catch(e=> console.log(e.message))
    }
    const deleteUser=()=>{
        axiosPublic.delete(`/users/all/deleteuser?id=${d._id}`)
        .then(()=>{
            toast.success("Deleted User!")
        })
        .catch(e=> console.log(e.message))
    }
    return (
        <>
            <tr>
                <th>{index+1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td><button onClick={makeAdmin} className={ `btn btn-info ${role === 'fraud' || role === 'admin' && 'btn-disabled'}`}>Make Admin</button></td>
                <td><button onClick={makeAgent} className={ `btn btn-info ${role === 'fraud' || role === 'agent' && 'btn-disabled'}`}>Make Agent</button></td>
                <td><button onClick={markFraud} className=" btn btn-info">Mark as Fraud</button></td>
                <td><button onClick={deleteUser} className=" btn btn-error">Delete</button></td>
            </tr>
        </>
    );
}

export default User;