import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Cards from './Cards';
import Clients from './Clients';
import Tabs from './TabJobs';
import TabJobs from './TabJobs';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>JobHunt | Home</title>
            </Helmet>
            <Banner></Banner>
            <TabJobs></TabJobs>
            <Clients></Clients>
            <Cards></Cards>

        </div>
    );
};

export default Home;