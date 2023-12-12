import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from '../components/Provider/AuthProvider';
import { useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import axios from 'axios';
import useUsers from '../hooks/useUsers';

const AddJob = () => {

    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const [users] = useUsers();
    console.log(users)
    const usersEmail = users?.map(user => user.email)
    console.log(usersEmail)


    const handleAddJob = e => {
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
        const applicants_number_string = form.applicantsNum.value
        const applicants_number = parseInt(applicants_number_string)
        const newJob = {job_banner, name_posted, job_title, job_category, salary_range, description,  job_posting_date, application_deadline, applicants_number}
        console.log(newJob)

        axiosSecure.post('/jobs', [newJob, usersEmail])
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Job added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

    }

    return (
        <div>
            <Helmet>
                <title>JobHunt | Add A Job</title>
            </Helmet>
            <section className="max-w-4xl p-6 mx-auto bg-gray-50 rounded-md shadow-md">
                <h2 className="text-3xl text-center text-[#5b0888] font-bold capitalize">Add A Job</h2>

                <form onSubmit={handleAddJob}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="">Job Banner</label>
                            <input name="photo" type="text" placeholder='photoURL' required className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Job Title</label>
                            <input name="jobTitle" type="text" placeholder='Job Title' required className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Your Name</label>
                            <input name="name" type="text" value={`${user.displayName}`} placeholder='Name' required className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Job Category</label>
                            <input name="category" type="text" placeholder='Job Category' required className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Salary Range</label>
                            <input name="salary" type="text" placeholder='Salary' required className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Description</label>
                            <input name="description" type="text" placeholder='Description' required className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Posting Date</label>
                            <input name="posting" type="date" placeholder='Posting' required className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Application Deadline</label>
                            <input name="deadline" type="date" placeholder='Deadline' required className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Applicants Number</label>
                            <input name="applicantsNum" type="text" defaultValue={0} placeholder='No of Applicants' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        
                    </div>

                    <div className="flex mx-auto mt-6">
                        <input type="submit" value="Add Job" className='w-full outline-white p-2 rounded-lg hover:bg-[#5b0888] hover:text-white border border-[#5b0888] text-[#5b0888]' />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddJob;