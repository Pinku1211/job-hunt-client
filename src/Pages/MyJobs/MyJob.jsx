import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyJob = ({job, handleDelete}) => {
    const { job_category, _id, job_title } = job;

    

    return (
        <div>
            <tbody>
                <tr>
                    <td>
                       {job_title}
                    </td>
                    <td>{job_category}</td>
                    
                    <th>
                        <Link to='/update'><button className="mx-2 border bg-[#5b0888] text-white hover:bg-[#380b50] p-2 sm:block rounded-md hover:text-white">Update</button></Link>
                    </th>
                    <th>
                        <button onClick={() => handleDelete(_id)} className="mx-2 border bg-[#5b0888] text-white hover:bg-[#380b50] p-2 sm:block rounded-md hover:text-white">Delete</button>
                    </th>
                </tr>
            </tbody>
        </div>
    );
};

export default MyJob;