import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/axiosPublic/useAxiosPublic";


const Choose = () => {
    const [chooses, setChooses] = useState([]);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get('/home/choose')
            .then(res => {
                setChooses(res.data)
            })

    }, [axiosPublic]);
    return (
        <div className="bg-[#FFFFFF] py-5">
            <div className="text-center">
                <h3 className="text-2xl">WHY CHOOSE US</h3>
                <h2 className="text-3xl font-semibold py-4">6 Reasons to Choose Estancy</h2>
                <p className="max-w-4xl mx-auto">Our real estate website captivates with seamless navigation, stunning listings, and user-friendly features—elevating the property search experience effortlessly.features—elevating the property search experience effortlessly.</p>
            </div>

            <div className='py-9 max-w-7xl mx-auto text-center grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    chooses.map(choose =>
                        <div className=" my-7 p-4 " key={choose.id}>
                            <img className="w-[70px] h-[70px] mx-auto" src={choose.image} alt="" />
                            <h2 className="text-xl font-bold">{choose.title}</h2>
                            <p className="text-[#B2B3B5] py-2">{choose.details}</p>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Choose;