import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/provider/AuthProvider";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import { RiKeyLine } from "react-icons/ri";
import { FaEyeSlash, FaEye, FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";
// ddd
const Signup = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { creatuserwithemail } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    data.role = "user";
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
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //auto password generate function
  const [generatedPassword, setGeneratedPassword] = useState("");
  const generatorPassword = () => {
    let pass = "";
    let string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
      "abcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

    for (let index = 1; index <= 12; index++) {
      let char = Math.floor(Math.random() * string.length + 1);
      // setState((pass += string.charAt(char)));
      pass += string.charAt(char);
    }
    setGeneratedPassword(pass);
    setValue("password", pass);
  };

  const changePassword = (e) => {
    setGeneratedPassword(e);
  };

  const cpyFunc = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  return (
    <div>
      <div className="hero min-h-screen pb-10">
        <div className=" flex-col items-center md:w-[480px]">
          <div className="">
            <img
              className="w-[100px] mx-auto h-[100px]"
              src="https://i.ibb.co/4psshzG/home-06-removebg-preview-removebg-preview-1.png"
              alt=""
            />
            <h1 className="text-center font-bold text-2xl my-4">
              Signup in to your account
            </h1>
          </div>
          <div className="shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>

              {/* email input box */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
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
                  <button
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
                <input type="checkbox" name="box" id="" className="mr-1" />
                <label className="inline-block" htmlFor="remember-me">
                  {" "}
                  I agree to the
                  <a className="underline" href="#">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              {/* SignUp button  */}
              <div className="form-control mt-6">
                <button className="btn bg-orange-400  hover:bg-orange-500 border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60">
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
