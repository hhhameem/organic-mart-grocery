import React from "react";

const UserReview = () => {
  return (
    <div className="d-flex justify-content-center mt-5 text-start fw-bold fs-5">
      <form className="border p-5 rounded border-dark">
          <h3 className="text-info">Give your Review</h3>
        <div className="mb-3">
          <label htmlFor="forName" className="form-label">
            Your name
          </label>
          <input
            defaultValue="Name"
            type="text"
            className="form-control"
            id="forName"
            // disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="forEmail" className="form-label">
            Email
          </label>
          <input
            defaultValue="Email"
            type="email"
            className="form-control"
            id="forEmail"
            // disabled
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
            Rating (1-5)
          </label>
          <input
            defaultValue="Rating"
            type="text"
            className="form-control"
            id="forPrice"
          />
        </div>
        <input
          className="btn btn-dark w-100"
          type="submit"
          value="Submit Review"
        />
      </form>
    </div>
  );
};

export default UserReview;
