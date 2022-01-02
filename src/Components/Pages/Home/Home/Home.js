import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <Categories></Categories>
        </div>
    );
};

export default Home;