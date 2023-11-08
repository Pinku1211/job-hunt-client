import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../components/Provider/AuthProvider';
import AppliedTable from './AppliedTable';
import { FaSistrix } from 'react-icons/fa';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AppliedJobs = () => {
    const {user} = useContext(AuthContext)
    const [jobs, setJobs] = useState([]);
    const [applicants, setApplicants] = useState([]);
    const [selectedJobs, setSelectedJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/applicants?email=${user.email}`,
        {credentials: 'include'}
        )
        .then(res => res.json())
        .then(data => setApplicants(data))
    },[])


    const appliedJobs = [];
    for (let i = 0; i < applicants.length; i++) {
        for (let j = 0; j < jobs.length; j++) {
            if (jobs[j]._id == applicants[i].jobId) {
                appliedJobs.push(jobs[j])
            }
        }

    }


    const handleSearch = e => {
        e.preventDefault();
        console.log(e.target.value)
        const selectedCategory = e.target.value;
        const searchedJobs = appliedJobs.filter(job => job.job_category === selectedCategory);
        console.log(searchedJobs)
        setSelectedJobs(searchedJobs)
        if(searchedJobs.length === 0) {
            Swal.fire({
                title: 'error!',
            text: 'There is no match',
            icon: 'error',
            confirmButtonText: 'Cool'
            })
        }

    }

    return (
        <div className='min-h[100vh]'>
            <Helmet>
                <title>JobHunt | Applied Jobs</title>
            </Helmet>
            <p className='my-8 text-[#5b0888] text-2xl text-center font-bold'>Search the Jobs You Applied</p>
            <div className='flex justify-center min-h-[10vh]'>
                <select onChange={handleSearch} className="select select-secondary w-full max-w-xs">
                    <option disabled selected>Pick your favorite job</option>
                    <option>On Site Job</option>
                    <option>Remote Job</option>
                    <option>Hybrid</option>
                    <option>Part Time</option>
                </select>
            </div>
            <p className='my-8 text-[#5b0888] text-4xl text-center font-bold'>The Jobs You Applied</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Category</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary range</th>
                        </tr>
                    </thead>

                    {
                        selectedJobs.length === 0 ?
                            appliedJobs?.map(job => <AppliedTable key={job._id} job={job}></AppliedTable>)
                         : selectedJobs?.map(job => <AppliedTable key={job._id} job={job}></AppliedTable>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;