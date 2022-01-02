import React from "react";

const MakeAdmin = () => {
  return (
    <div className="d-flex justify-content-center mt-5 text-start fw-bold fs-5">
      <form className="border p-5 rounded border-dark">
        <h3 className="text-info">Make New Admin</h3>
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

        <input
          className="btn btn-dark w-100"
          type="submit"
          value="Make Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
