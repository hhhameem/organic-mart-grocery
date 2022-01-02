import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Product.css"
const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('./product.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div id="prducts">
      <h1 className=" mt-2 text-center title">Organic Mart & Grocery</h1>

      <div className="products-details mt-3">
        {products.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Product;
