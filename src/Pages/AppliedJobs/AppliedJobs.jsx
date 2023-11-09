import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../components/Provider/AuthProvider';
import AppliedTable from './AppliedTable';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AppliedJobs = () => {
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([]);
    const [applicants, setApplicants] = useState([]);
    

    useEffect(() => {
        fetch('https://job-hunt-final-server.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    useEffect(() => {
        fetch(`https://job-hunt-final-server.vercel.app/applicants?email=${user.email}`,
            { credentials: 'include' }
        )
            .then(res => res.json())
            .then(data => setApplicants(data))
    }, [])

    const [selectedJobs, setSelectedJobs] = useState([]);
    const [defaultJob, setDefaultJob] = useState([])
    useEffect(() => {
        const appliedJobs = jobs?.filter(job1 => applicants.some(job2 => job2.jobId === job1._id));
        console.log(appliedJobs)
        setSelectedJobs(appliedJobs);
        setDefaultJob(appliedJobs)
    }, [jobs, applicants])


    
    console.log(selectedJobs)

    const handleSearch = e => {
        e.preventDefault();
        console.log(e.target.value);
        const selectedCategory = e.target.value;
        const searchedJobs = defaultJob?.filter(job => job.job_category == selectedCategory);
          
        console.log(searchedJobs)
        if (searchedJobs.length === 0) {
            Swal.fire({
                title: 'error!',
                text: 'There is no match',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            setSelectedJobs(defaultJob)
            
        }
        setSelectedJobs(searchedJobs)
        
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
            <div className="overflow-x-auto my-10">
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
                        selectedJobs?.map(job => <AppliedTable key={job._id} job={job}></AppliedTable>)
                    }
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Category</th>
                            <th>Salary range</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;