import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllJobs from './AllJobs';

const TabJobs = () => {

    const [jobs, setJobs] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const onSite = jobs?.filter(job => job.job_category === "On Site Job");
    const remote = jobs?.filter(job => job.job_category === "Remote Job")
    const hybrid = jobs?.filter(job => job.job_category === "Hybrid")
    const partTime = jobs?.filter(job => job.job_category === "Part Time")



    return (
        <div>
            <h1 className='text-4xl text-center mb-4 text-[#5b0888] font-bold md:text-5xl lg:text-6xl'>Our Jobs Categories</h1>
            <Tabs>
                <div className='bg-base-100 px-6 py-10'>
                    <div className='max-w-[85rem] mx-auto'>
                        <TabList className='text-md md:text-2xl font-semibold flex justify-center'>
                            <Tab>All Jobs</Tab>
                            <Tab>On Site Jobs</Tab>
                            <Tab>Remote Jobs</Tab>
                            <Tab>Hybrid</Tab>
                            <Tab>Part-Time Jobs</Tab>
                        </TabList>

                        <div className=''>
                            <TabPanel>
                                <div className='max-w-[85rem] flex justify-center my-8 mx-auto'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                        {
                                            jobs?.map(job => <AllJobs key={job._id} job={job}></AllJobs>)
                                        }

                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='max-w-[85rem] flex justify-center my-8'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                        {
                                            onSite?.map(job => <AllJobs key={job._id} job={job}></AllJobs>)
                                        }

                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='max-w-[85rem] flex justify-center my-8'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                        {
                                            remote?.map(job => <AllJobs key={job._id} job={job}></AllJobs>)
                                        }

                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='max-w-[85rem] flex justify-center my-8'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                        {
                                            hybrid?.map(job => <AllJobs key={job._id} job={job}></AllJobs>)
                                        }

                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='max-w-[85rem] flex justify-center my-8'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                        {
                                            partTime?.map(job => <AllJobs key={job._id} job={job}></AllJobs>)
                                        }

                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>

                </div>
                <hr />
            </Tabs>
        </div>
    );
};

export default TabJobs;
