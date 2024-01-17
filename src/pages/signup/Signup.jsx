import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <div className="hero min-h-screen pb-10">
                <div className=" flex-col items-center md:w-[480px]">
                    <div className=''>
                    <img className='w-[100px] mx-auto h-[100px]' src="https://i.ibb.co/4psshzG/home-06-removebg-preview-removebg-preview-1.png" alt="" />
                    <h1 className='text-center font-bold text-2xl my-4'>Signup in to your account</h1>
                    </div>
                    <div className="shadow-2xl bg-base-100">
                        <form  onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {/* Name input box */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                 {...register('name', { required: true })}
                                 placeholder="Your Name" className="input input-bordered" />
                                 {errors.text && <span className="error-message text-red-500">Name is required</span>}
                            </div>
                            {/* Photo URL box */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>

                            {/* email input box */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email address</span>
                                </label>
                                <input type="email"
                                 {...register('email', { required: true })}
                                 placeholder="Your Email" className="input input-bordered" />
                                 {errors.email && <span className="error-message text-red-500">Email is required</span>}
                            </div>

                            {/* password input box */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>

                            {/* Terms and Conditions Checkbox */}
                            <div className="mt-2">
                              <input type="checkbox" name="box" id="" className="mr-1" />
                                <label className="inline-block" htmlFor="remember-me"> I agree to the 
                                  <a className="underline" href="#">Terms and Conditions</a>
                                </label>
                            </div>  

                            {/* SignUp button  */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary hover:bg-red-500 border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60">Sign up</button>
                            </div>

                            {/* new here */}
                            <p className="py-6 text-center "><small className="text-base">Already have an account || <Link to="/signin" className="text-blue-600">Plese Login</Link></small></p>

                          
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

