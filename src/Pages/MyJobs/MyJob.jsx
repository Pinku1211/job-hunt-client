import React from 'react';

const MyJob = ({job}) => {
    const { job_category, _id, job_title, name_posted, salary_range, job_posting_date, applicants_number, application_deadline } = job;
    return (
        <div>
            <tbody>
                <tr>
                    <td>
                       {job_title}
                    </td>
                    <td>{job_category}</td>
                    
                    <th>
                        <button className="mx-2 border bg-[#5b0888] text-white hover:bg-[#380b50] p-2 sm:block rounded-md hover:text-white">Update</button>
                    </th>
                    <th>
                        <button className="mx-2 border bg-[#5b0888] text-white hover:bg-[#380b50] p-2 sm:block rounded-md hover:text-white">Delete</button>
                    </th>
                </tr>
            </tbody>
        </div>
    );
};

export default MyJob;