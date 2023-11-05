import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from "../../../public/icon.png"
// import './Navbar.css'
const Navbar = () => {
    const location = useLocation();

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-base-200 text-sm py-4">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-2'>
                        <img className='w-[30px] md:w-12' src={logo} alt="logo" />
                        <h1 className='text-2xl md:text-4xl font-bold text-[#5B0888]'>JobHunt</h1>
                    </div>

                    <div className="sm:hidden flex items-center">
                        <div className="tooltip" data-tip="name">
                            <div class="relative inline-block">
                                <img class="inline-block w-[1.5rem] rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                            </div>
                        </div>
                        <button className='mx-2 border border-[#5b0888] rounded-md px-2 py-[2px] hover:bg-[#5b0888] hover:text-white'>login</button>
                        <button type="button" className="hs-collapse-toggle p-1 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-[#5B0888] shadow-sm align-middle hover:bg-[#5B0888] focus:outline-none  focus:ring-offset-2 focus:ring-offset-white  transition-all text-sm border-[#5B0888]  hover:text-white " data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>

                    </div>
                </div>
                <div id="navbar-image-and-text-1" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col gap-3 mt-5 font-semibold sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                        <NavLink className={location.pathname === '/' && 'text-white bg-[#5B0888] px-2 py-1 rounded-md'} to="/">Home</NavLink>
                        <NavLink className={location.pathname === '/allJobs' && 'text-white bg-[#5B0888] px-2 py-1 rounded-md'} to="/allJobs">All Jobs</NavLink>
                        <NavLink className={location.pathname === '/appliedJobs' && 'text-white bg-[#5B0888] px-2 py-1 rounded-md'} to="/appliedJobs">Applied Jobs</NavLink>
                        <NavLink className={location.pathname === '/addJob' && 'text-white bg-[#5B0888] px-2 py-1 rounded-md'} to="/addJob">Add A Job</NavLink>
                        <NavLink className={location.pathname === '/myJobs' && 'text-white bg-[#5B0888] px-2 py-1 rounded-md'} to="/myJobs">My Jobs</NavLink>
                        <NavLink className={location.pathname === '/blogs' && 'text-white bg-[#5B0888] px-2 py-1 rounded-md'} to="/blogs">Blogs</NavLink>
                    </div>
                </div>
                <div className="tooltip ml-4 hidden sm:block" data-tip="name">
                    <div class="relative inline-block">
                        <img class="inline-block w-[2rem] rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                    </div>
                </div>
                <Link to='/login'><button className='mx-2 border border-[#5b0888] rounded-md px-2 py-[2px] hidden sm:block hover:bg-[#5b0888] hover:text-white'>login</button></Link>
            </nav>
        </header>
    );
};

export default Navbar;