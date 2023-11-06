import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import JobRow from './JobRow';

const AllJobs = () => {

    const jobs = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>JobHunt | All Jobs</title>
            </Helmet>
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
                        jobs.map(job => <JobRow key={job._id} job={job}></JobRow>)
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