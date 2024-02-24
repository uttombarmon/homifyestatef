import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../utils/provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";
import useAxiosPrivate from "../../../hooks/axiosPrivate/useAxiosPrivate";

function MakeOffer() {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const axiosPrivate = useAxiosPrivate()
    useEffect(() => {
        axiosPublic.get(`/wish-lists/make/offer?id=${id}`)
            .then(e => {
                setData(e.data)
                console.log(e);
            })
            .catch(e => console.log(e.message))
    }, [axiosPublic,id])
    const date = new Date()
    const cdate = date.toISOString().slice(0,10)
    const makeOffer=e=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const title = form.title.value
        const location = form.location.value
        const a_name = form.a_name.value 
        const email = form.email.value 
        const time = form.time.value
        const price = form.price.value
        const offerdata ={
            "title": title,
            "location": location,
            "a_name": a_name,
            "email": email,
            "name": name,
            "time": time,
            "id": data.id,
            "status": "pending",
            "img": data.img,
            "amount":price
        }
        axiosPrivate.post('/makeoffer', {offerdata})
        .then(()=>{
            axiosPrivate.delete(`/removeitem?id=${id}`)
            .then(e=>{
                console.log(e.data);
                if(e.data.deletedCount>0){
                    navigate('/dashboard/propertiesbought')
                    toast.success("Offerd Successful!")
                }
            })
            .catch(e=> console.log(e.message))
        })
        .catch(e=> console.log(e.message))
    }
    return (
        <>
            <div className=" px-4 py-6">
                <p className=" text-center text-xl md:text-3xl mb-10 font-bold">Make Offer</p>
                <form onClick={makeOffer}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={data?.title} name="title" readOnly required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={data?.location} name="location" readOnly required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Agent Name</label>
                            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={data?.author?.name} name="a_name" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Amount</label>
                            <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={data?.property_details?.price} name="price" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={user?.displayName} name="name" readOnly required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                            <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={cdate} name="time" readOnly required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={user?.email} name="email" readOnly required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Offer Now</button>
                </form>

            </div>
        </>
    );
}

export default MakeOffer;
