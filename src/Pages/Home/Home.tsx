import React from 'react';
import Hero from './Hero/Hero';
import HomeSearch from './HomeSearch/HomeSearch';
import NewProperties from './NewProperties/NewProperties';
import SuperAgents from './SuperAgents/SuperAgents';
import YourProperty from './YourProperty/YourProperty';

const Home = () => {
    return (
        <div>
            <Hero/>
            <HomeSearch/>
            <NewProperties/>
            <SuperAgents/>
            <YourProperty/>
        </div>
    );
};

export default Home;