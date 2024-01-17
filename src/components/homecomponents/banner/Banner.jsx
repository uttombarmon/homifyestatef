
import { BiDotsVerticalRounded } from "react-icons/bi";
const Banner = () => {

    return (
        <section className="bg-gray-100 h-[700px]  grid items-end">
            <div className=" hidden  h-[220px] w-[70%] mx-auto lg:grid items-end mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/8XVPLDT/propery-1.jpg)' }} >
                <div className="flex w-[95%] mx-auto">
                    <span className="text-black hover:bg-slate-200  bg-white border py-2 px-5">Buy</span>
                    <span className="text-black hover:bg-slate-200 bg-white border py-2  px-5">Sell</span>
                    <span className="text-black hover:bg-slate-200 bg-white border py-2  px-5">Rent</span>
                </div>
                <div className=" h-[150px] w-[95%] mx-auto mb-7 bg-white">
                    <div className=" w-[90%] mx-auto grid text-3xl pt-2  justify-end">
                        <BiDotsVerticalRounded></BiDotsVerticalRounded>
                    </div>
                    <div className="  h-[140px] w-[95%]  mb-4 bg-white grid items-end">

                        <form className="card-body ">
                            <div className=" grid md:grid-cols-5 gap-4 justify-between items-center ">
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <div className="border">
                                        <select className="select select-ghost w-full max-w-xs border">
                                            <option disabled selected>Pick the best JS framework</option>
                                            <option>Svelte</option>
                                            <option>Vue</option>
                                            <option>React</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Type</span>
                                    </label>
                                    <div className="border">
                                        <select className="select select-ghost w-full max-w-xs border">
                                            <option disabled selected>Pick the best JS framework</option>
                                            <option>Svelte</option>
                                            <option>Vue</option>
                                            <option>React</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">price</span>
                                    </label>
                                    <div className="border">
                                        <select className="select select-ghost w-full max-w-xs border">
                                            <option disabled selected>value</option>
                                            <option>Svelte</option>
                                            <option>Vue</option>
                                            <option>React</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">KeyWord</span>
                                    </label>
                                    <input type="text" placeholder="Enter Your Keyword" className="input input-bordered" required />
                                </div>
                                <div className="mt-10 grid justify-end" >
                                    <button className="btn w-[150px] text-xl bg-yellow-300 hover:bg-yellow-400">Search</button>
                                </div>
                            </div>


                        </form>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Banner;
