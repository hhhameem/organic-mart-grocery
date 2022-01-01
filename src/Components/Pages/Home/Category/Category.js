import React from 'react';
import './Category.css';

const Category = ({ food }) => {
    const { img, title } = food;
    console.log(food);
    return (
        <div className="col-4 col-md-2 category-box py-4">
            <div className="p-3 border rounded-3">
                <img src={img} className="image-Category" alt="" />
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default Category;