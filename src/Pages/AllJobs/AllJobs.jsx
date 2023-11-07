import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import JobRow from './JobRow';
import { FaSistrix } from 'react-icons/fa';

const AllJobs = () => {

    const jobs = useLoaderData();
    const [defaultJobs, setDefaultJob] = useState(jobs);

    const handleSearch = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const jobTitle = form.get('job').toLowerCase();
        
        const searchedJobs = defaultJobs.filter(defaultJob => defaultJob.job_title.toLowerCase() == jobTitle);
        setDefaultJob(searchedJobs)
        console.log(searchedJobs)
        
    }

    

    return (
        <div>
            <Helmet>
                <title>JobHunt | All Jobs</title>
            </Helmet>
            <p className='my-8 text-[#5b0888] text-3xl text-center font-bold'>See jobs we've picked just for you</p>
            <form onSubmit={handleSearch} className='mb-8'>
                <div class="mx-auto max-w-2xl sm:flex sm:space-x-3 p-2 bg-white border rounded-lg md:rounded-full lg:rounded-full shadow-lg shadow-gray-100 ">
                    <div class="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
                        <label for="hs-hero-name-1" class="block text-sm font-medium"><span class="sr-only">Your name</span></label>
                        <input name='job' type="text" id="hs-hero-name-1" class="py-3 px-4 block w-full border-transparent rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 " placeholder="Job title" />
                    </div>
                    <div class="pt-2 sm:pt-0 grid ">
                        <button type='submit' class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-[#5b0888] text-white hover:bg-[#380b50] focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 transition-all text-sm sm:p-4" href="#">
                            <FaSistrix className='text-xl'></FaSistrix>
                        </button>
                    </div>
                </div>
            </form>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary range</th>
                        </tr>
                    </thead>
                    {
                        defaultJobs.length === 0 ? <div><h1 className='text-center text-red-400 text-xl font-bold my-3'>There is no relevant jobs</h1></div> : defaultJobs?.map(job => <JobRow key={job._id} job={job}></JobRow>) 
                    

                    }
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary range</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default AllJobs;