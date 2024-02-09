import { MdCall } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="mx-auto items-center py-5 bg-gray-100">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-between lg:p-20 p-10 gap-9 items-center text-center">
        <div className="items-center text-center">
          <h1 className="lg:text-2xl text-xl font-bold text-black mb-1">Need help? Talk to our Expert.</h1>
          <p className="font-semibold text-sm">
            Talk to our experts or browse through more properties
          </p>
        </div>
        <div className="">
          <Link to={"/contact"} ><button type="button" className="btn uppercase hover:bg-orange-400 btn-outline mb-2 mr-4">
            Contact Us
          </button> </Link>
          <button type="button" className="btn uppercase btn-outline text-white bg-black">
            <MdCall /> 920 850 5256
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;