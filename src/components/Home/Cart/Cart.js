import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTotal } from '../../../redux/cartSlice';
import { addNewOrder } from '../../../redux/ordersSlice';
import "./Cart.css";
import SingleCartProduct from './SingleCartProduct';
const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const cartTotal = useSelector(state => state.cart.cartTotal)
  useEffect(() => dispatch(getTotal()), [cart, dispatch, cartTotal])


  const handleOrder = () => {
    dispatch(addNewOrder(cart))
  }



  return (
    <div className="card mt-5 mb-2 ">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h1 className="text-dark fw-bold">Organic Mart & Grocery</h1>
                <h4>
                  <b>Shopping Cart</b>
                </h4>
              </div>
            </div>
          </div>
          {
            cart.map(item => <SingleCartProduct key={item.id} item={item}></SingleCartProduct>)
          }

        </div>
        <div className="col-md-4 summary">
          <div>
            <h1>
              <b>Summary</b>
            </h1>
          </div>
          <hr />
          <form>
            <p className="text-start">SHIPPING</p>{" "}
            <select>
              <option className="text-muted">Standard-Delivery- $5.00</option>
            </select>
            <p className="text-start">COUPON CODE</p>{" "}
            <input id="code" placeholder="Enter your code" />
          </form>
          <div
            className="row"
            style={{
              "border-top": "1px solid rgba(0,0,0,.1)",
              padding: "2vh 0",
            }}
          >
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">${cartTotal + 5}</div>
          </div>{" "}
          <button className="btn" onClick={() => handleOrder()}>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
