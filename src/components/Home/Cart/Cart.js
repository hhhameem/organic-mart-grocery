import React from "react";
import "./Cart.css";
const Cart = () => {
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
          <div className="row border-top border-bottom">
            <div className="row main align-items-center">
              <div className="col-2">
                <img
                  className="img-fluid"
                  src="https://demo.egenslab.com/html/eg-shop-grocery/assets/images/products/straw.png"
                />
              </div>
              <div className="col">
                <div className="row text-muted">Fresh Vegetables</div>
                <div className="row">Food-1</div>
              </div>
              <div className="col">
                {" "}
                <a href="#">-</a>
                <a href="#" className="border">
                  1
                </a>
                <a href="#">+</a>{" "}
              </div>
              <div className="col">
                $ 44.00 <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row main align-items-center">
              <div className="col-2">
                <img
                  className="img-fluid"
                  src="https://demo.egenslab.com/html/eg-shop-grocery/assets/images/products/product-sm4.png"
                />
              </div>
              <div className="col">
                <div className="row text-muted">Fresh Vegetable</div>
                <div className="row">Food-2</div>
              </div>
              <div className="col">
                {" "}
                <a href="#">-</a>
                <a href="#" className="">
                  1
                </a>
                <a href="#">+</a>{" "}
              </div>
              <div className="col">
                $ 44.00 <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
          <div className="row border-top border-bottom">
            <div className="row main align-items-center">
              <div className="col-2">
                <img
                  className="img-fluid"
                  src="https://demo.egenslab.com/html/eg-shop-grocery/assets/images/products/mango.png"
                />
              </div>
              <div className="col">
                <div className="row text-muted">Fresh Vegetable</div>
                <div className="row">Food-3</div>
              </div>
              <div className="col">
                {" "}
                <a href="#">-</a>
                <a href="#" className="border">
                  1
                </a>
                <a href="#">+</a>{" "}
              </div>
              <div className="col">
                $ 44.00 <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
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
            <p className="text-start">CUPON CODE</p>{" "}
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
            <div className="col text-right">$ 137.00</div>
          </div>{" "}
          <button className="btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
