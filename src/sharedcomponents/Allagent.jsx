
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/axiosPublic/useAxiosPublic";
import AgentCard from "./AgentCard";
const Allagent = () => {

    const [personInfos, setPersonInfos] = useState([]);
    console.log(personInfos);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const rensponse = await axiosPublic("/users/all/agent");
                const data = rensponse.data;
                setPersonInfos(data)
            }
            catch (error) {
                console.log(error, "error fetching");
            }
        }
        fetchData()
    }, [axiosPublic])

    return (
        <>
            <section
                className="bg-gray-100 mb-10  h-[320px] md:h-[400px] relative border-4 grid items-end"
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 700px",
                    backgroundPosition: "center",
                    backgroundImage: "url(https://i.ibb.co/8PmVZMt/banner-bg.jpg)",
                }}
            >
                <div className=" opacity-80 text-black  z-10    w-full items-center text-center mb-[15%] absolute">
                    <h1 className=" text-5xl "> All Agent</h1>
                </div>
            </section>
            <div>
                <div className="grid justify-center mb-12 px-5 mx-auto md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-2">
                    {
                        personInfos?.map((personInfo) => <AgentCard key={personInfo._id} personInfo={personInfo} ></AgentCard>

                        )
                    }
                </div>
            </div>

        </>
    );
};

export default Allagent;