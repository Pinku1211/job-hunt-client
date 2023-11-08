import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const job = useLoaderData();
    const { job_category, _id, job_title, name_posted, salary_range, job_posting_date, applicants_number, application_deadline, job_banner, description } = job;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const job_banner = form.photo.value
        const name_posted = form.name.value
        const job_title = form.jobTitle.value
        const job_category = form.category.value
        const salary_range = form.salary.value
        const description = form.description.value
        const job_posting_date = form.posting.value
        const application_deadline = form.deadline.value
        const applicants_number = form.applicantsNum.value
        const updatedJob = {job_banner, name_posted, job_title, job_category, salary_range, description,  job_posting_date, application_deadline, applicants_number}
        console.log(updatedJob);

        fetch(`https://job-hunt-nest-server.vercel.app/jobs/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Job has been updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }

    return (
        <div>
            <Helmet><title>JobHunt | Update</title></Helmet>
            <section className="max-w-4xl p-6 mx-auto bg-gray-50 rounded-md shadow-md">
                <h2 className="text-3xl text-center text-[#5b0888] font-bold capitalize">Update Your Job</h2>

                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="">Job Banner</label>
                            <input name="photo" type="text" defaultValue={job_banner} placeholder='photoURL' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Job Title</label>
                            <input name="jobTitle" type="text" defaultValue={job_title} placeholder='Job Title' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Your Name</label>
                            <input name="name" type="text" value={name_posted} placeholder='Name' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Job Category</label>
                            <input name="category" type="text" defaultValue={job_category} placeholder='Job Category' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Salary Range</label>
                            <input name="salary" type="text" defaultValue={salary_range} placeholder='Salary' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Description</label>
                            <input name="description" type="text" defaultValue={description} placeholder='Description' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Posting Date</label>
                            <input name="posting" type="text" defaultValue={job_posting_date} placeholder='Posting' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Application Deadline</label>
                            <input name="deadline" type="text" defaultValue={application_deadline} placeholder='Deadline' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Applicants Number</label>
                            <input name="applicantsNum" type="text" defaultValue={applicants_number} placeholder='No of Applicants' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        
                    </div>

                    <div className="flex mx-auto mt-6">
                        <input type="submit" value="Update Job" className='w-full outline-white p-2 rounded-lg hover:bg-[#5b0888] hover:text-white border border-[#5b0888] text-[#5b0888]' />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Update;