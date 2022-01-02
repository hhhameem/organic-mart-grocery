import React from "react";

const AddProduct = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="border p-5 rounded text-start fw-bold fs-5 border-dark">
          <h2 className="text-info">Organic Mart & Grocery</h2>
          <p className="text-center text-danger">Add New Product</p>
        <div className="mb-3">
          <label htmlFor="forName" className="form-label ">
            Product name
          </label>
          <input
            defaultValue="Name"
            type="text"
            className="form-control"
            id="forName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="forDescription" className="form-label">
            Description
          </label>
          <textarea
            defaultValue="Description"
            type="text"
            className="form-control"
            id="forDescription"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="forPrice" className="form-label">
            Price
          </label>
          <input
            defaultValue="Price"
            type="text"
            className="form-control"
            id="forPrice"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="forImg" className="form-label">
            Image url
          </label>
          <input
            defaultValue="Image"
            type="text"
            className="form-control"
            id="forImg"
          />
        </div>
        <input
          className="btn btn-dark w-100"
          type="submit"
          value="Add New Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
