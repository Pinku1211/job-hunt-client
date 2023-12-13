import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import MyJob from './MyJob';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../components/Provider/AuthProvider';

const MyJobs = () => {

    const { user } = useContext(AuthContext)
    const loadedJobs = useLoaderData();
    const [jobs, setJobs] = useState(loadedJobs);

    const myJobs = jobs?.filter(job => job.name_posted == `${user.displayName}`)


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id)

                fetch(`https://job-hunt-final-server.vercel.app/jobs/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Job has been deleted.',
                                'success'
                            )
                            const remaining = jobs?.filter(job => job._id !== id);
                            setJobs(remaining)
                            console.log(remaining)
                        }

                    })

            }
        })
    }

    return (
        <div className='min-h-[80vh]'>
            <Helmet>
                <title>JobHunt | My Jobs</title>
            </Helmet>
            {
                myJobs.length === 0 ? <h1 className='text-red-400 text-xl min-h-[60vh] flex items-center justify-center'>Nothing here</h1>
                : <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=''>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary range</th>
                        </tr>
                    </thead>
                    {
                        myJobs.length === 0 ? <div><h1 className='text-center text-red-400 text-xs md:text-xl font-bold my-3'>There is no job you added</h1></div> : myJobs?.map(job => <MyJob key={job._id} job={job} handleDelete={handleDelete}></MyJob>)

                    }

                </table>
            </div>
            }
            
        </div>
    );
};

export default MyJobs;