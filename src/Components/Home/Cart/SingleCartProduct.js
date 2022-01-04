import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { decrement, getTotal, increment, removeItem } from '../../../redux/cartSlice';

const SingleCartProduct = ({ item: { id, image, price, title, cartQuantity } }) => {
    const dispatch = useDispatch()


    return (
        <div className="row border-top border-bottom">
            <div className="row main align-items-center">
                <div className="col-2">
                    <img
                        className="img-fluid"
                        src={image}
                        alt=''
                    />
                </div>
                <div className="col">
                    <div className="row text-muted">Fresh Vegetables</div>
                    <div className="row">{title}</div>
                </div>
                <div className="col">
                    {" "}
                    <button onClick={() => dispatch(decrement(id))}>-</button>
                    <a href="#" className="border">
                        {cartQuantity}
                    </a>
                    <button onClick={() => dispatch(increment(id))}>+</button>
                </div>
                <div className="col">
                    ${price * cartQuantity} <button className="btn btn-danger" onClick={() => dispatch(removeItem(id))}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCartProduct;