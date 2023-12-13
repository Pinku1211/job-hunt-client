import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../components/Provider/AuthProvider';
import AppliedTable from './AppliedTable';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useJobs from '../../hooks/useJobs';

const AppliedJobs = () => {
    const { user } = useContext(AuthContext)
    const [applicants, setApplicants] = useState([]);
    const [jobs] = useJobs();

    useEffect(() => {
        fetch(`https://job-hunt-final-server.vercel.app/applicants?email=${user.email}`,
            // { credentials: 'include' }
        )
            .then(res => res.json())
            .then(data => setApplicants(data))
    }, [])

    const [selectedJobs, setSelectedJobs] = useState([]);
    const [defaultJob, setDefaultJob] = useState([])
    useEffect(() => {
        const appliedJobs = jobs?.filter(job1 => applicants.some(job2 => job2.jobId === job1._id));
        setSelectedJobs(appliedJobs);
        setDefaultJob(appliedJobs)
    }, [jobs, applicants])

    const handleSearch = e => {
        e.preventDefault();
        const selectedCategory = e.target.value;
        const searchedJobs = defaultJob?.filter(job => job.job_category == selectedCategory);

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
            {
                defaultJob?.length === 0 ? <h1 className='text-red-400 text-xl min-h-[60vh] flex items-center justify-center'>there is no applied job</h1> 
                : <div className="overflow-x-auto my-10">
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
            }
        </div>
    );
};

export default AppliedJobs;