import React from 'react';
import { Link } from 'react-router-dom';

const AllJobs = ({ job }) => {

    const { job_category, job_title, name_posted, salary_range, job_posting_date, applicants_number, application_deadline } = job;
    

    return (
        <div>
            <div className="card border rounded-none text-neutral-content ">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-black font-bold text-3xl">{name_posted}</h2>
                    <h2 className="card-title text-black font-bold text-2xl">{job_title}</h2>
                    <p className='text-black'>Job Posting Date: {job_posting_date}</p>
                    <p className='text-black'>Application Deadline: {application_deadline}</p>
                    <p className='text-black'>Salary Range: {salary_range}</p>
                    <p className='text-black'>Job Applicants Number: {applicants_number}</p>
                    <Link to='/details'><button className='mx-2 border border-[#5b0888] rounded-md px-2 py-[2px] sm:block text-[#5b0888] hover:bg-[#5b0888] hover:text-white'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllJobs;