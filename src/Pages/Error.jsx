import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <html className="h-full">
            <body className="flex h-full">
                <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">

                    <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                        <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl ">404</h1>
                        <h1 className="block text-2xl font-bold text-white"></h1>
                        <p className="mt-3 text-gray-600 ">Oops, something went wrong.</p>
                        <p className="text-gray-600 ">Sorry, we couldn't find your page.</p>
                        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">


                            <Link to='/' className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:ring-offset-slate-900" href="../examples.html"><svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                                Back to home</Link>

                        </div>
                    </div>

                    <footer className="mt-auto text-center py-5">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <p className="text-sm text-gray-600">© All Rights Reserved. 2022.</p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
};

export default Error;