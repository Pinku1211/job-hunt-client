import React from 'react';
import { Helmet } from 'react-helmet-async';

const Update = () => {
    return (
        <div>
            <Helmet><title>JobHunt | Update</title></Helmet>
            <section className="max-w-4xl p-6 mx-auto bg-gray-50 rounded-md shadow-md">
                <h2 className="text-3xl text-center text-[#5b0888] font-bold capitalize">Add A Job</h2>

                <form onSubmit={handleAddJob}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="">Job Banner</label>
                            <input name="photo" type="text" placeholder='photoURL' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Job Title</label>
                            <input name="jobTitle" type="text" placeholder='Job Title' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Your Name</label>
                            <input name="name" type="text" placeholder='Name' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Job Category</label>
                            <input name="category" type="text" placeholder='Job Category' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Salary Range</label>
                            <input name="salary" type="text" placeholder='Salary' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Description</label>
                            <input name="description" type="text" placeholder='Description' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Posting Date</label>
                            <input name="posting" type="text" placeholder='Rating' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Application Deadline</label>
                            <input name="deadline" type="text" placeholder='Deadline' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Applicants Number</label>
                            <input name="applicantsNum" type="text" placeholder='No of Applicants' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        
                    </div>

                    <div className="flex mx-auto mt-6">
                        <input type="submit" value="Add Product" className='w-full outline-white p-2 rounded-lg hover:bg-[#5b0888] hover:text-white border border-[#5b0888] text-[#5b0888]' />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Update;