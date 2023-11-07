import React from 'react';

const AppliedTable = ({job}) => {
    const { job_category, _id, job_title, name_posted, salary_range, job_posting_date, applicants_number, application_deadline } = job;
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
                    <td>{job_category}</td>
                    <td>{job_posting_date}</td>
                    <td>{application_deadline}</td>
                    <td>{salary_range}</td>
                    
                </tr>
            </tbody>
        </>
    );
};

export default AppliedTable;