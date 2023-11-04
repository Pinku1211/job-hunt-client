import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>JobHuntNest | Home</title>
            </Helmet>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;