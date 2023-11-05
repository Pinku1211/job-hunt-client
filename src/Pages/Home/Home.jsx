import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Cards from './Cards';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>JobHunt | Home</title>
            </Helmet>
            <Banner></Banner>
            <Cards></Cards>
        </div>
    );
};

export default Home;