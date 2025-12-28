import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-bold text-center text-2xl">Register Your Account</h2>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              
              <input type="text" className="input" placeholder="Name" />
              <label className="label">Photo URL</label>
              
              <input type="text" className="input" placeholder="Photo URL" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              

              <button className="btn btn-neutral mt-4">Register</button>
              <p className="font-semibold text-center pt-5">
                Already have an Account?
                 <Link className="text-secondary" to="/auth/Login">
                  Login
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
