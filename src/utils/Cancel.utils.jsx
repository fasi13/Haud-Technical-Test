import React from "react";
import { NavLink } from "react-router-dom";

const CancelButton = () => (
  <NavLink to="/">
    <button
      data-testid="cancel"
      className="w-full px-4 py-2 font-bold text-white bg-black rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
    >
      Cancel
    </button>
  </NavLink>
);
export default CancelButton