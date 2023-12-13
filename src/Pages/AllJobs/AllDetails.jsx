import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/Provider/AuthProvider';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllDetails = () => {
    const formRef = useRef()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const job = useLoaderData();
    const axiosSecure = useAxiosSecure();

    const { job_category, _id, job_title, name_posted, salary_range, job_posting_date, applicants_number, application_deadline, job_banner, description } = job;
    const jobId = _id

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.from_name.value
        const resume = form.resume.value
        const email = form.from_email.value
        const applicant = { name, email, resume, jobId }

        const currentDate = new Date();
        const today = currentDate.getTime();
        const deadline = new Date(application_deadline).getTime();

        if (deadline > today) {
            axiosSecure.post('/applicants', applicant)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    new Swal("JobHunt", "Application Submitted successfully!");
                        navigate(location?.state ? location.state : "/allJobs")
                        emailjs.sendForm('service_jrlazz4', 'template_xgjnozk', formRef.current, '9p1CIaofBsrpwmiZi')
                            .then((result) => {
                                console.log(result.text);
                            }, (error) => {
                                console.log(error.text);
                            });
                }
            })

            fetch(`https://job-hunt-final-server.vercel.app/applicants/${jobId}`, {
                method: 'PUT',
            })
            .then(res => res.json())
            .then(data => console.log(data))


        } else {
            new Swal("JobHunt", "Application Deadline is over!");
            navigate(location?.state ? location.state : "/allJobs")
        }

    }


    return (
        <div>
            <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
                <img className='w-full h-[300px] mb-4' src={job_banner} alt="" />
                <h2 className="card-title text-black font-bold text-2xl">{name_posted}</h2>
                <h2 className="card-title text-black font-bold text-3xl">{job_title}</h2>
                <p className='text-black'>Job Posting Date: {job_posting_date}</p>
                <p className='text-black'>Category: {job_category}</p>
                <p className='text-black'>Application Deadline: {application_deadline}</p>
                <p className='text-black'>Salary Range: {salary_range}</p>
                <p className='text-black'>Job Applicants Number: {applicants_number}</p>
                <p className='text-black'>Job Description: {description}</p>
                <div className='flex justify-center mt-6'>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="border bg-[#5b0888] text-white hover:bg-[#380b50] py-2 px-5 sm:block rounded-md hover:text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Apply</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="username">Username</label>
                                        <input name='from_name' id="username" type="text" defaultValue={user.displayName} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                                        <input name='from_email' id="emailAddress" type="email" defaultValue={user.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" for="password">Your Resume</label>
                                        <input name='resume' id="resume" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                                </div>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default AllDetails;