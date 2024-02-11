import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/provider/AuthProvider";
import useAxiosPublic from "../../hooks/axiosPublic/useAxiosPublic";
import { FaFacebook } from "react-icons/fa6";
import { FaEyeSlash, FaEye, FaCopy } from "react-icons/fa";
import { RiKeyLine } from "react-icons/ri";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    setValue,
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
      })
      .catch((err) => console.log(err.message));
  };
  const signInWithGoogle = () => {
    signupWihtGoogle()
      .then(async (res) => {
        const data = {
          name: res?.user?.displayName,
          photoURL: res?.user?.photoURL,
          email: res?.user?.email,
          role: "user",
          method: "google",
        };
        const getUser = await axiosPublic.get(`/users/${res?.user?.email}`);
        console.log(getUser);
        const userFromDB = getUser?.data?.email;
        // console.log(getUser?.data?.role)
        if (!userFromDB) {
          const result = await axiosPublic.post(`/users/user`, data);
          console.log(result);
          navigate("/");
        }
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const facebookSignin = () => {
    signupWithFacebook()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // show password function
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
                  onChange={changePassword}
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
