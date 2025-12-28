import React from "react";
import { Link, NavLink } from "react-router";
import User from "../../assets/user.png"

const Navbar = () => {
  return (

    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="flex gap-5 text-primary">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/carrer">Carrer</NavLink>
      </div>
      <div className="flex gap-5">
            <img src={User} alt="" />
            <Link to="/auth/login" className="btn btn-primary px-10">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
