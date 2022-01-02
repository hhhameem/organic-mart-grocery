import React from "react";
import "./ProductCard.css";
const ProductCard = (props) => {
  const { title, image, description, price, _id } = props.product;
  return (
    <div class="container">
      <main class="grid mt-3">
        <article>
          <img
            className="mt-2"
            src={image}
            alt="tshirt photo"
            style={{ width: "220px", height: "220px" }}
          />
          <div class="text">
            <h3>{title}</h3>
            <p>
              Price{" "}
              <a href="https://teespring.com/stores/dog-lover-graphic-design">
                {price}
              </a>
            </p>
            <p className="text-start">{description.slice(0, 100)}</p>
            <button className="btn btn-outline-dark fa-light fa-cart-circle-arrow-down">ADD TO CART</button>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ProductCard;
