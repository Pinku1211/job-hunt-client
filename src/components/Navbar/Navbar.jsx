import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaAlignJustify } from "react-icons/fa";
import logo from '../../../public/icon.png'

const Navbar = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    };

    const userContent = <>
        {
            user ? <div className='flex items-center gap-1'>
                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                    <img className="inline-block w-8 rounded-full ring-2 ring-[white]" src={user?.photoURL} alt="Image Description" />
                </div>
                <button onClick={handleSignOut} className='mx-2 border border-[#5b0888] rounded-md px-2 py-[2px] sm:block hover:bg-[#5b0888] hover:text-white'>Logout</button>
            </div> : <div>
                <Link to='/login'><button className='mx-2 border border-[#5b0888] rounded-md px-2 py-[2px] sm:block hover:bg-[#5b0888] hover:text-white'>Login</button></Link>
            </div>
        }
    </>

    const navLinks = <><NavLink className={location.pathname === '/' && 'text-white font-semibold bg-[#5B0888] px-2 py-1 rounded-md'} to="/">Home</NavLink>
    <NavLink className={location.pathname === '/allJobs' && 'text-white font-semibold bg-[#5B0888] px-2 py-1 rounded-md'} to="/allJobs">All Jobs</NavLink>
    <NavLink className={location.pathname === '/appliedJobs' && 'text-white font-semibold bg-[#5B0888] px-2 py-1 rounded-md'} to="/appliedJobs">Applied Jobs</NavLink>
    <NavLink className={location.pathname === '/addJob' && 'text-white font-semibold bg-[#5B0888] px-2 py-1 rounded-md'} to="/addJob">Add A Job</NavLink>
    <NavLink className={location.pathname === '/myJobs' && 'text-white font-semibold bg-[#5B0888] px-2 py-1 rounded-md'} to="/myJobs">My Jobs</NavLink>
    <NavLink className={location.pathname === '/blogs' && 'text-white font-semibold bg-[#5B0888] px-2 py-1 rounded-md'} to="/blogs">Blogs</NavLink></>

    return (
        <div className='bg-base-200 py-2'>
            <div className="navbar  max-w-[85rem] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn px-3 hover:bg-[#5b0888] hover:text-white mr-3 lg:hidden">
                            <FaAlignJustify className='text-[#5b0888] hover:text-white text-xl'></FaAlignJustify>
                        </label>
                        <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-[30px] md:w-12' src={logo} alt="logo" />
                        <h1 className='text-2xl md:text-4xl font-bold text-[#5B0888]'>JobHunt</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal items-center gap-4 px-1">
                        {navLinks}
                    </div>
                </div>
                <div className="navbar-end">
                    {userContent}
                </div>
            </div>
        </div>

    );
};

export default Navbar;