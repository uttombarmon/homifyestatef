import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/provider/AuthProvider";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa6";
import toast from "react-hot-toast";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signupWihtGoogle, signupWithFacebook, signinWithEmailAndPassword } =
    useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    signinWithEmailAndPassword(data.email, data.password)
      .then(() => {
        navigate("/");
        toast.success("Success full Login")
      })
      .catch((err) => console.log(err.message));
  };
  const signInWithGoogle = () => {
    signupWihtGoogle()
      .then(async (res) => {
        navigate("/");
        const data = {
          name: res?.user?.displayName,
          photoURL: res?.user?.photoURL,
          email: res?.user?.email,
          role: "user",
          method: "google",
          uid: res?.user?.uid
        };
        const getUser = await axiosPublic.get(`/users/${res?.user?.email}`);
        const userFromDB = getUser?.data?.email;
        // console.log(getUser?.data?.role)
        if (!userFromDB) {
          await axiosPublic.post(`/users/user`, data);
          toast.success("Success full Login")
        }
        navigate("/");
        toast.success("Success full Login");
      })
      .catch((err) => console.log(err));
  };

  const facebookSignin = () => {
    signupWithFacebook()
      .then((result) => {
        console.log(result);
        toast.success("Successfully, logged")
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Logged failed")
      });
  };

  // show password function
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="hero min-h-screen pb-4">
        <div className=" flex-col items-center md:w-[480px]">
          <div className="">
            <img
              className="w-[100px] mx-auto h-[100px]"
              src="https://i.ibb.co/4psshzG/home-06-removebg-preview-removebg-preview-1.png"
              alt=""
            />
            <h1 className="text-center font-bold text-2xl my-4">
              Sign in to your account
            </h1>
          </div>
          <div className="shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  {...register("password", { required: true })}
                  placeholder="password"
                  className="input input-bordered"
                  // value={generatedPassword}
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

              <div className="flex justify-between items-center ">
                {/* remember me  */}
                <div>
                  <input id="remember-me" name="remember-me" type="checkbox" />
                  <label className="pl-2">Remember me</label>
                </div>

                {/* forget password  */}
                <div>
                  <label className="label justify-end">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-[#3F42F1BF] font-bold"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
              </div>

              {/* login button  */}
              <div className="form-control mt-6">
                <button className="btn  bg-orange-400  hover:bg-orange-500 border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60">
                  Sign in
                </button>
              </div>

              {/* new here */}
            </form>
            <div className="pt-2 pb-3">
              <p className="text-center ">
                <small className="text-base">
                  Are you new here? ||{" "}
                  <Link to="/signup" className="text-blue-600">
                    Sign Up
                  </Link>
                </small>
              </p>

              {/* or line */}
              <div className="flex justify-between items-center text-center mt-3">
                <div className="flex-1">
                  <img
                    src="https://i.ibb.co/GspjGPV/divider.png"
                    alt=""
                    className="h-5 w-32"
                  />
                </div>
                <div className="flex-1">Or continue with</div>
                <div className="flex-1">
                  <img
                    src="https://i.ibb.co/GspjGPV/divider.png"
                    alt=""
                    className="h-5 w-32"
                  />
                </div>
              </div>

              {/* social login  */}
              <div className="text-center">
                <div className="text-center mt-3">
                  <button onClick={signInWithGoogle} className="px-4">
                    <img
                      className="w-10"
                      src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png"
                      alt=""
                    />
                  </button>
                  <button onClick={facebookSignin} className="px-4">
                    <FaFacebook className="text-[43px] bg-white rounded-[20px] text-blue-400"></FaFacebook>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
