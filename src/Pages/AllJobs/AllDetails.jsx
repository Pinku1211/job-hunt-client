import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllDetails = () => {
    const job = useLoaderData();
    const { job_category, _id, job_title, name_posted, salary_range, job_posting_date, applicants_number, application_deadline, job_banner, description } = job;
    console.log(job)
    return (
        <div>
            <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
                <img className='w-full h-[300px] mb-4' src={job_banner} alt="" />
                <h2 className="card-title text-black font-bold text-2xl">{name_posted}</h2>
                <h2 className="card-title text-black font-bold text-3xl">{job_title}</h2>
                <p className='text-black'>Job Posting Date: {job_posting_date}</p>
                <p className='text-black'>Category: {job_category}</p>
                <p className='text-black'>Application Deadline: {application_deadline}</p>
                <p className='text-black'>Salary Range: {salary_range}</p>
                <p className='text-black'>Job Applicants Number: {applicants_number}</p>
                <p className='text-black'>Job Description: {description}</p>
            </div>
        </div>
    );
};

export default AllDetails;