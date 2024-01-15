import { Link } from "react-router-dom";


const Signup = () => {
    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 bg-gray-500 lg:px-8 bg-l">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-[90px] w-32 "
                        src="https://i.ibb.co/4psshzG/home-06-removebg-preview-removebg-preview-1.png"
                        alt="Your Company"
                    />
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow-2xl bg-gradient-to-r from-orange-300 to-yellow-300 p-5 rounded">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label
                                htmlFor="Name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Enter Your Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="text"
                                    type="text"
                                    autoComplete="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>

                            <input type="checkbox" name="box" id="" className="mr-1" />
                            <label className="inline-block" htmlFor="remember-me"> I agree to the <a className="underline" href="#">Terms and Conditions</a></label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-orange-200 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-950 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="py-6 text-center "><small className="text-base">Already have an account || <Link to="/login" className="text-blue-600">Plese Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;