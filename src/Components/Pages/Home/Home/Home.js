import React from 'react';
import Product from '../../../Home/Product/Product';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Product></Product>
        </div>
    );
};

export default Home;