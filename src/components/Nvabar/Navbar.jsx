import React from "react";
import { NavLink } from "react-router";
import User from "../../assets/user.png"

const Navbar = () => {
  return (

    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/carrer">Carrer</NavLink>
      </div>
      <div className="flex gap-5">
            <img src={User} alt="" />
            <button className="btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
