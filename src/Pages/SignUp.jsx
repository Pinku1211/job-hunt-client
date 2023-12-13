import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { AuthContext } from '../components/Provider/AuthProvider';
import { saveUser } from '../hooks/auth';

const SignUp = () => {
    const { createUser, logInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();



    const handleSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        const checkBox = e.target.checkBox.checked;
        setSignUpError('');

        if (password.length < 6) {
            setSignUpError('Password should be at least six character')
            return;
        }
        if (!/(?=.*[A-Z])(?=.*[!@#$%^&+=])/.test(password)) {
            setSignUpError('Password is missing an uppercase letter or special character')
            return;
        }
        if (!checkBox) {
            setSignUpError('Please accept our terms and conditions to proceed')
            return;
        }

        createUser(email, password)
            .then(async result => {
                const loggedUser = result.user
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                new Swal("JobHunt", "Account created successfully!");
                navigate(location?.state ? location.state : "/")
                const savedUser = await saveUser(loggedUser)
                console.log(savedUser)
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }


    return (
        <div className="relative overflow-hidden">
            <Helmet><title>JobHunt | SignUp</title></Helmet>
            <div className="mx-auto max-w-screen-md flex justify-center py-6 px-4 sm:px-6 md:max-w-screen-xl md:py-10 lg:py-16 md:px-8">
                <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">

                    <h1 className="text-3xl text-center text-[#5b0888] font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                        SignUp Now To Explore
                    </h1>
                    <div className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>


                    <form onSubmit={handleSignUp}>
                        <div className="mb-4">
                            <label for="hs-hero-name-2" className="block text-sm font-medium "><span className="sr-only">Full name</span></label>
                            <input type="text" name='name' id="hs-hero-name-2" className="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 border border-[#5b0888]" placeholder="Full name" required />
                        </div>

                        <div className="mb-4">
                            <label for="hs-hero-email-2" className="block text-sm font-medium "><span className="sr-only">Email address</span></label>
                            <input type="email" name='email' id="hs-hero-email-2" className="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 border border-[#5b0888]" placeholder="Email address" required />
                        </div>

                        <div className="mb-4 relative">
                            <label for="hs-hero-password-2" className="block text-sm font-medium "><span className="sr-only">Password</span></label>
                            <input type={showPassword ? "text" : "password"} name='password' id="hs-hero-password-2" className="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 border border-[#5b0888]" placeholder="Password" required />
                            <span onClick={() => setShowPassword(!showPassword)} className='absolute right-3 bottom-4'>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                        </div>
                        <div className="mb-4">
                            <label for="hs-hero-password-2" className="block text-sm font-medium "><span className="sr-only">PhotoUrl</span></label>
                            <input type="text" name='photo' id="hs-hero-password-2" className="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 border border-[#5b0888]" placeholder="PhotoUrl" required />
                        </div>
                        <div className="mb-2">
                            <label className="flex items-center">
                                <input type="checkbox" name='checkBox' className="form-checkbox" />
                                <span className="block ml-2 text-md font-medium text-gray-700 cursor-pointer">Agree to Privacy Policy</span>
                            </label>
                        </div>

                        {
                            signUpError && <p className='text-red-500 text-xs mb-2'>{signUpError}</p>

                        }

                        <div className="grid">
                            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#5b0888] text-white hover:bg-[#400660] focus:outline-none  transition-all text-sm sm:p-4">Sign up</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className='flex justify-center font-bold mb-6'>
                <h1>Already have an account? <Link to='/login'><span className='text-[#5b0888]'>Login</span></Link></h1>
            </div>
        </div>
    );
};

export default SignUp;