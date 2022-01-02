import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="mx-auto mb-5">
            <div className="about-image">
                <h2 className="about-heading">About <br />Organic-Mart-Grocery</h2>
                <NavLink to="/home">Back to Home</NavLink>
            </div>

            <div className="row mx-auto align-items-center my-5">
                <div className="col-12 col-md-6">
                    <img src="https://demo.egenslab.com/html/eg-shop-grocery/assets/images/bg/about-bg.jpg" className="rounded-3 w-100" alt=""></img>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <h3>Welcome to Organic-Mart-Grocery</h3>
                    <p>An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose and how it differs from the competition, and encourage discussion and interaction.</p>
                    <img src="https://demo.egenslab.com/html/eg-shop-grocery/assets/images/icons/about2.svg" alt="" />
                    <img src="https://demo.egenslab.com/html/eg-shop-grocery/assets/images/icons/about1.svg" alt="" />
                </div>
            </div>
            <div>
                <iframe src="https://www.youtube.com/embed/8PmM6SUn7Es" className="w-50 h-100" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default About;