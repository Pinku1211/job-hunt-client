import React from 'react';
import { FaCheck, FaAngleDoubleUp, FaConnectdevelop } from "react-icons/fa";

const Cards = () => {
    return (
        <div className='bg-base-200'>
            <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                <h1 className='text-4xl text-center mb-4 text-gray-800 font-bold md:text-5xl lg:text-6xl'>Ready to streamline your search?</h1>
                <p className='text-[#5b0888] font-bold text-center mb-6'>With millions of up-to-date listings that connect you directly to company career sites, we make it easier to Getwork.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className="card bg-white text-neutral-content">
                        <div className="card-body items-center text-center">
                            <div className='bg-[#FF9209] w-fit mx-auto p-6 rounded-full'>
                                <FaCheck className='text-white text-4xl'></FaCheck>
                            </div>
                            <h2 className="card-title text-black font-bold text-3xl">Verified Jobs</h2>
                            <p className='text-black'>We source jobs directly from employer websites so you can get the highest-quality, most accurate listings. No duplicates. No spam.</p>
                        </div>
                    </div>
                    <div className="card bg-white text-neutral-content">
                        <div className="card-body items-center text-center">
                            <div className='bg-[#D2DE32] w-fit mx-auto p-6 rounded-full'>
                                <FaAngleDoubleUp className='text-white text-4xl'></FaAngleDoubleUp>
                            </div>
                            <h2 className="card-title text-black font-bold text-3xl">Upto-Date Listings</h2>
                            <p className='text-black'>Get there first. Our jobs are updated every single day so you can browse the most current listings available, with many you won't find on other job sites.</p>
                        </div>
                    </div>
                    <div className="card bg-white text-neutral-content">
                        <div className="card-body items-center text-center">
                            <div className='bg-[#D0A2F7] w-fit mx-auto p-6 rounded-full'>
                                <FaConnectdevelop className='text-white text-4xl'></FaConnectdevelop>
                            </div>
                            <h2 className="card-title text-black font-bold text-3xl">Direct connections</h2>
                            <p className='text-black'>Apply without the hassle. Our listings bring you directly to company websites so you can apply at the source, without extra signups.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cards;