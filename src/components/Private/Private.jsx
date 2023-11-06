import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <div className='w-fit mx-auto h-[80vh]'>
            <span className="loading loading-spinner loading-lg mt-36 text-center"></span>
        </div>
    }
    if (user) {
        return children;
    }

    return (
        <>
            <Navigate state={location.pathname} to="/login"></Navigate>
        </>
    );
};

export default Private;