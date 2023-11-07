import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import MyJob from './MyJob';

const MyJobs = () => {

    const jobs = useLoaderData();
    console.log(jobs)

    const myJobs = jobs.filter(job => job.name_posted === "John Doe")

    return (
        <div>
            <Helmet>
                <title>JobHunt | My Jobs</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Category</th>
                            
                        </tr>
                    </thead>
                    {
                        myJobs.length === 0 ? <div><h1 className='text-center text-red-400 text-xl font-bold my-3'>You haven't added a Job yet!</h1></div> : myJobs?.map(job => <MyJob key={job._id} job={job}></MyJob>) 
                    

                    }
                    
                </table>
            </div>
        </div>
    );
};

export default MyJobs;