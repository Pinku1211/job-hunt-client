import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import MyJob from './MyJob';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../components/Provider/AuthProvider';

const MyJobs = () => {

    const {user} = useContext(AuthContext)
    const loadedJobs = useLoaderData();
    const [jobs, setJobs] = useState(loadedJobs);
    console.log(jobs)

    const myJobs = jobs.filter(job => job.name_posted === `${user.displayName}`)

    const handleDelete = id =>{
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

                fetch(`http://localhost:5000/jobs/${id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your product has been deleted.',
                            'success'
                          )
                          const remaining = jobs.filter(job => job._id !== id);
                          setJobs(remaining)
                          console.log(remaining)
                    }
                    
                })
              
            }
          })
    }

    return (
        <div className='h-[60vh]'>
            <Helmet>
                <title>JobHunt | My Jobs</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='flex justify-start gap-20'>
                            <th>Job Title</th>
                            <th>Category</th>                            
                        </tr>
                    </thead>
                    {
                        myJobs.length === 0 ? <div><h1 className='text-center text-red-400 text-xl font-bold my-3'>There is no Product of yours</h1></div> : myJobs?.map(job => <MyJob key={job._id} job={job} handleDelete={handleDelete}></MyJob>) 
                    

                    }
                    
                </table>
            </div>
        </div>
    );
};

export default MyJobs;