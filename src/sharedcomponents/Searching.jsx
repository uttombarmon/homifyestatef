import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../utils/provider/AuthProvider";

const Searching = () => {
    const {setSearchInfo} = useContext(AuthContext);

    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        setSearchInfo(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=' bg-[#dfdfdf74] text-white w-full lg:w-3/4 py-8 flex flex-wrap justify-between mt-4 lg:mt-20 rounded-lg px-5 mx-auto'>

                {/* want section  */}
                <div className=' flex flex-wrap w-1/3 mx-2 my-2 lg:mx-0 lg:w-1/4 border-r-[1px]'>
                    <label htmlFor="want" className=' w-full font-bold'>Want</label>
                    <select /* name="want" */ {...register("want", { required: true })} id="" className=' bg-slate-800 rounded-md p-2 mt-4'>
                        {/* <option value="buy">Buy</option> */}
                        <option value="rent">Rent</option>
                        <option value="sale">sale</option>
                    </select>
                </div>

                {/* property type section  */}
                <div className=' flex flex-wrap mx-2 lg:mx-0 my-2 w-1/3 lg:w-1/4 lg:border-r-[1px]'>
                    <label htmlFor="type" className=' w-full font-bold'>Property Type</label>
                    <select /* name="want" */ {...register("type", { required: true })} id="" className=' bg-slate-800 rounded-md p-2 mt-4'>
                        {/* <option value="mixed">Mixed</option> */}
                        <option value="Apartment">Apartment</option>
                        <option value="Factory">Factory</option>
                        <option value="Villa">Villa</option>
                        <option value="House">House</option>
                        <option value="Office">Office</option>
                    </select>
                </div>

                {/* location section  */}
                <div className=' flex flex-wrap w-1/3 my-2 lg:w-1/4'>
                    <label htmlFor="want" className=' w-full font-bold'>Location</label>
                    <input type="text" {...register("location", { required: true })} placeholder='Street, City, Country..' className=' bg-slate-800 rounded-md p-2 mt-4' />
                </div>
                <button className=' btn bg-amber-300 font-bold self-end'>Search</button>
            </form>
        </div>
    );
};

export default Searching;