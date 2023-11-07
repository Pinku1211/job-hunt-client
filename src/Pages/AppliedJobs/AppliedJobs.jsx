import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../components/Provider/AuthProvider';
import AppliedTable from './AppliedTable';

const AppliedJobs = () => {
    const {user} = useContext(AuthContext);

    const jobs = useLoaderData();

    const appliedJobs = jobs?.filter(job => job.name_posted.toLowerCase() == `${user.displayName.toLowerCase()}`)
    console.log(appliedJobs)

    return (
        <div>
            <Helmet>
                <title>JobHunt | Applied Jobs</title>
            </Helmet>
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
                        appliedJobs.length === 0 ? <div><h1 className='text-center text-red-400 text-xl font-bold my-3'>There is no relevant jobs</h1></div> : appliedJobs?.map(job => <AppliedTable key={job._id} job={job}></AppliedTable>) 
                    

                    }
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;