import React from 'react';
import Category from '../Category/Category';
import './Categories.css';

const Categories = () => {
    const foods = [
        {
            id: 1,
            img: "https://static.thenounproject.com/png/1586100-200.png",
            title: "Fresh Foods",
        },
        {
            id: 2,
            img: "https://static.thenounproject.com/png/1586100-200.png",
            title: "Fresh Foods",
        },
        {
            id: 3,
            img: "https://static.thenounproject.com/png/1586100-200.png",
            title: "Fresh Foods",
        },
        {
            id: 4,
            img: "https://static.thenounproject.com/png/1586100-200.png",
            title: "Fresh Foods",
        },
        {
            id: 5,
            img: "https://static.thenounproject.com/png/1586100-200.png",
            title: "Fresh Foods",
        },
        {
            id: 6,
            img: "https://static.thenounproject.com/png/1586100-200.png",
            title: "Fresh Foods",
        },

    ]

    return (
        <div className="categories">
            <h1 className="text-secondary">What do you looking for ?</h1>
            <h4>Here is our product categories</h4>
            <div className="row mx-auto px-3">
                {
                    foods.map(food => <Category key={food.id}
                        food={food}></Category>)
                }
            </div>

        </div>
    );
};

export default Categories;