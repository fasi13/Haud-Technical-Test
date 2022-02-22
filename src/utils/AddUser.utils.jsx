import React from "react";
import { NavLink } from "react-router-dom";

const AddUser = () => (
  <NavLink to="/create-user">
    <div className=" py-2">
      <button
        className="w-full inline-flex items-center justify-center px-4 py-2 bg-black hover:bg-blue-500 border border-transparent rounded-md font-semibold capitalize text-white   focus:outline-none  focus:ring disabled:opacity-25 transition"
        data-testid="add-user"
      >
        Add User
      </button>
    </div>
  </NavLink>
);

export default AddUser
