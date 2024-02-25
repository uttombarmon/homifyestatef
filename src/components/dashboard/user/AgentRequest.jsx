import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../utils/provider/AuthProvider';
import { useContext, useState } from "react";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import useAxiosPrivate from '../../../hooks/axiosPrivate/useAxiosPrivate';

const AgentRequest = () => {
    const { register, handleSubmit } = useForm();
    const { userInfo } = useContext(AuthContext);
    const [dataUrl, setUrl] = useState('')
    const axiosPrivate = useAxiosPrivate()
    const storages = getStorage()
    const storagesRef = ref(storages, 'd/dum')

    const onSubmit = (data) => {
        console.log(data.file[0]);
        // Handle form submission here
        uploadBytes(storagesRef, data.file[0])
            .then(e => {
                console.log(e);
                // const dataurl = ref(storages,'https://firebasestorage.googleapis.com/d/dum)')
                // console.log(dataurl)
                getDownloadURL(ref(storages, 'd/dum'))
                    .then(e => setUrl(e))
                    .catch(err=> console.log(err))
            })
            .catch(err=> console.log(err))
            axiosPrivate.get('')
    };

    return (
        <div className="mx-auto p-6 h-screen bg-slate-100 text-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Request For Agent</h2>
            <form onSubmit={handleSubmit(onSubmit)} className=" flex justify-around flex-wrap">
                <div className=' w-4/5 my-6 max-w-md md:w-2/5'>
                    <label className="block mb-2 text-sm font-bold" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name')}
                        value={userInfo?.name}
                        className="w-full border-2 focus:bg-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className=' w-4/5 max-w-md my-6 self-center md:w-2/5'>
                    <label className="block mb-2 text-sm font-bold" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                        value={userInfo?.email}
                        className="w-full border-2 focus:bg-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className=' w-4/5 max-w-md my-6 self-center md:w-2/5'>
                    <label className="block mb-2 text-sm font-bold" htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        {...register('phone')}
                        value={userInfo?.phone}
                        className="w-full border-2 focus:bg-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className=' w-4/5 max-w-md md:w-2/5 my-6 self-center'>
                    <label className="block mb-2 text-sm font-bold" htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        {...register('location')}
                        value={`${userInfo?.address}, ${userInfo?.city}, ${userInfo?.country}`}
                        className="w-full border-2 focus:bg-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className='my-6 md:ml-10 w-4/5 flex justify-start md:w-full'>
                    <div className='md:w-2/5'>
                        <label className="block mb-2 text-sm font-bold" htmlFor="file">NID Card</label>
                        <input
                            type="file"
                            id="file"
                            accept="application/pdf"
                            {...register('file')}
                            className="file-input file-input-bordered file-input-info w-full"
                        />
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <button type="submit" className="w-2/4 bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AgentRequest;
