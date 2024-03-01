import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/provider/AuthProvider";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import { RiKeyLine } from "react-icons/ri";
import { FaEyeSlash, FaEye, FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";
import { UsePhoto } from "../../hooks/imageHosting/ImageHosting";
// ddd
const Signup = () => {
  const axiosPublic = useAxiosPublic();
  const { creatuserwithemail } = useContext(AuthContext);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [ischecked, setChecked] = useState(false)
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async(data) => {
    data.role = "user";
    const imgloc = data.photoURL[0];
    const img = await UsePhoto(imgloc);
    data.photoURL=img
    creatuserwithemail(data.email, data.password)
      .then(async (result) => {
        if (result.user) {
          const res = await axiosPublic.post("/users/user", data);
          console.log(res);
        }
        navigate("/");
        toast.success("Successfully, account created")
      })
      .catch((err) => console.log(err));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //auto password generate function
  const generatorPassword = () => {
    let pass = "";
    let string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
      "abcdefghijklmnopqrstuvwxyz" + "0123456789" + "@#$%&*";

    for (let index = 1; index <= 12; index++) {
      let char = Math.floor(Math.random() * string.length + 1);
      // setState((pass += string.charAt(char)));
      pass += string.charAt(char);
    }
    setGeneratedPassword(pass);
    setValue("password", pass);
  };

  const changePassword = (e) => {
    console.log(e.target.value);
    setGeneratedPassword(e.target.value);
  };

  const cpyFunc = () => {
    navigator.clipboard.writeText(generatedPassword);
    toast.success('Password Copied!')
  };

  return (
    <div>
      <div className="hero h-fit py-10">
        <div className=" flex items-center flex-wrap md:w-full justify-around">
          <div className=" w-full mx-5 text-center md:w-2/5">
            <img
              className="w-[150px] mx-auto h-[100px]"
              src="https://i.ibb.co/4psshzG/home-06-removebg-preview-removebg-preview-1.png"
              alt=""
            />
            <h1 className="text-center font-bold text-2xl my-4">
              Join for Exclusive Deals
            </h1>
            <p>Unlock your dream home with us! Join now for exclusive listings, personalized insights, and expert guidance. Your key to finding the perfect place to call home starts here.</p>
          </div>
          <div className="shadow-2xl bg-white rounded-xl mx-3 my-2 w-full md:w-2/5">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
              {/* Name input box */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="input input-bordered"
                />
                {errors.text && (
                  <span className="error-message text-red-500">
                    Name is required
                  </span>
                )}
              </div>

              {/* Photo URL box */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="file"  {...register("photoURL", { required: true })} className="file-input file-input-bordered file-input-info w-full" />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>

              {/* email input box */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="error-message text-red-500">
                    Email is required
                  </span>
                )}
              </div>

              {/* password input box */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,

                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  onChange={changePassword}
                  value={generatedPassword}
                />
                <span className="relative w-[30px] text-xl flex justify-end -top-8 left-[90%] ">
                  {showPassword ? (
                    <FaEye
                      className="hover:cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <FaEyeSlash
                      className="hover:cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  )}
                </span>
                <div className="flex gap-5">
                  <button type="button"
                    onClick={generatorPassword}
                    className="flex border border-black rounded-lg p-3 bg-[#e0eaee] justify-center items-center gap-1 hover:bg-[white]"
                  >
                    <span>
                      <RiKeyLine />
                    </span>
                    Autogenerate Password
                  </button>
                  <button
                    onClick={cpyFunc}
                    type="button"
                    className="flex border border-black rounded-lg p-3 bg-[#e0eaee] justify-center items-center gap-1 hover:bg-[white]"
                  >
                    <span>
                      <FaCopy />
                    </span>
                    Copy
                  </button>
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="mt-2">
                <input type="checkbox" name="box" defaultChecked={ischecked} onClick={() => setChecked(!ischecked)} id="" className={`mr-1`} />
                <label className="inline-block" htmlFor="remember-me">
                  I agree to the
                  <a className="underline" href="#">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              {/* SignUp button  */}
              <div className="form-control mt-6">
                <button disabled={!ischecked} type="submit" className={`btn bg-orange-400 disabled:text-slate-600 hover:bg-orange-500 border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60`}>
                  Sign up
                </button>
              </div>

              {/* new here */}
              <p className="py-6 text-center ">
                <small className="text-base">
                  Already have an account ||{" "}
                  <Link to="/signin" className="text-blue-600">
                    Plese Login
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
