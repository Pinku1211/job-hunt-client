import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyJob = ({ job, handleDelete }) => {
    const { job_category, _id, job_title, name_posted, salary_range, job_posting_date, applicants_number, application_deadline, job_banner, description } = job;

    return (
        <>
            <tbody>
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div>
                                <div className="font-bold">{name_posted}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {job_title}
                    </td>
                    <td>{job_posting_date}</td>
                    <td>{application_deadline}</td>
                    <td>{salary_range}</td>

                    <th>
                        <Link to={`/update/${_id}`}><button className="mx-2 border bg-[#5b0888] text-white hover:bg-[#380b50] p-2 sm:block rounded-md hover:text-white">Update</button></Link>
                    </th>
                    <th>
                        <button onClick={() => handleDelete(_id)} className="mx-2 border bg-[#5b0888] text-white hover:bg-[#380b50] p-2 sm:block rounded-md hover:text-white">Delete</button>
                    </th>
                </tr>
            </tbody>
        </>
    );
};

export default MyJob;