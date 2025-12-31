import React, { useContext } from "react"; // Changed 'use' to 'useContext' for standard practice
import { Link, useNavigate } from "react-router"; // Added useNavigate for redirection
import { AuthContext } from "../Proider/AuthProvider";

const Register = () => {
  const { CreateUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    CreateUser(email, password)
      .then((result) => {
        const user = result.user;
        
        // 1. Fix: Ensure the key is 'displayName' (Capital N)
        // 2. We chain the update to ensure it finishes before we update the state
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            // Update the local user state with the new data
            setUser({ ...user, displayName: name, photoURL: photo });
            // Optional: Redirect user after successful registration
            navigate("/"); 
          })
          .catch((err) => console.log("Error updating profile:", err));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-bold text-center text-2xl">Register Your Account</h2>
        <form onSubmit={onHandleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input name="name" type="text" className="input" placeholder="Name" required />

            <label className="label">Photo URL</label>
            <input name="photo" type="text" className="input" placeholder="Photo URL" required />

            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required />

            <button type="submit" className="btn btn-neutral mt-4">Register</button>
            
            <p className="font-semibold text-center pt-5">
              Already have an Account?{" "}
              <Link className="text-secondary" to="/auth/Login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;