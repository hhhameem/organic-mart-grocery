import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;