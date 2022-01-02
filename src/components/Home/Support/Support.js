import React from "react";
import "./Support.css";
const Support = () => {
  return (
    <div className="containerSupport p-3">
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="text-center">
              <div className="img-hover-zoom img-hover-zoom--colorize">
                <img
                  className="shadow"
                  src="https://demo.egenslab.com/html/eg-shop-grocery/assets/images/icons/feature-i1.svg"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>
            </div>
            <div className="card-body">
              <div className="clearfix mb-3"></div>

              <div className="my-2 text-center">
                <h1>Fast Free Shipping</h1>
              </div>
              <div className="mb-3">
                <h2 className="text-uppercase text-center role">
                  Around the world
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="text-center">
              <div className="img-hover-zoom img-hover-zoom--colorize">
                <img
                  className="shadow"
                  src="https://demo.egenslab.com/html/eg-shop-grocery/assets/images/icons/feature-i2.svg"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>
            </div>
            <div className="card-body">
              <div className="clearfix mb-3"></div>

              <div className="my-2 text-center">
                <h1>24/7 Supports</h1>
              </div>
              <div className="mb-3">
                <h2 className="text-uppercase text-center role">
                  SEO Contact us 24 hours
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="text-center">
              <div className="img-hover-zoom img-hover-zoom--colorize">
                <img
                  className="shadow"
                  src="https://demo.egenslab.com/html/eg-shop-grocery/assets/images/icons/feature-i3.svg"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>
            </div>

            <div className="card-body">
              <div className="clearfix mb-3"></div>

              <div className="my-2 text-center">
                <h1>100% Money Back</h1>
              </div>
              <div className="mb-3">
                <h2 className="text-uppercase text-center role">
                  Guarantee of money retun
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="text-center">
              <div className="img-hover-zoom img-hover-zoom--colorize">
                <img
                  className="shadow"
                  src="https://demo.egenslab.com/html/eg-shop-grocery/assets/images/icons/feature-i4.svg"
                  alt="Another Image zoom-on-hover effect"
                />
              </div>
            </div>
            <div className="card-body">
              <div className="clearfix mb-3"></div>
              <div className="my-2 text-center">
                <h1>100% Secure Payment</h1>
              </div>
              <div className="mb-3">
                <h2 className="text-uppercase text-center role">
                  Your payment are safe with us.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
