import Searching from "../../../sharedcomponents/Searching";
import bgimage from "./bg.jpg";
const Banner = () => {
  return (
    <div className=" w-full h-[600px] md:h-[500px] lg:h-[600px] text-slate-100">
      <div className=" relative h-full">
        <img
          className=" absolute inset-0 brightness-[0.70] w-full h-full object-cover lg:object-fill"
          src={bgimage}
          alt="Banner JPG"
        />

        {/* text and searching section  */}
        <div className=" pt-20 lg:pt-24 bg-[#00000029] h-full relative p-4">
          <h1 className=" text-3xl w-full lg:text-5xl lg:w-3/4 mx-auto font-extrabold">
            Find a place where you can be yourself
          </h1>
          <p className=" mx-auto lg:text-2xl w-full lg:w-3/4 lg:my-6">
            If, you`re looking for place where you can be yourself, don`t give
            up. Keep searching untill you find a place that a place that feels
            like home.
          </p>
          {/* serching section  */}
          <Searching></Searching>
        </div>
      </div>
    </div>
  );
};

export default Banner;
