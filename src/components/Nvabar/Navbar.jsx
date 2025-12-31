
import { Link, NavLink } from "react-router";
import Userimg from "../../assets/user.png"
import { AuthContext } from "../../Proider/AuthProvider";
import { use } from "react";


const Navbar = () => {
  const {user,LogOut} = use(AuthContext)
  const handleLogout=()=>{
    console.log("trying to logout")
    LogOut().then(()=>{
      alert("you are Logout Succesfully")

    }).catch((error)=>{
      console.log(error)

    })
  }

  return (

    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="flex gap-5 text-primary">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/carrer">Carrer</NavLink>
      </div>
      <div className="flex gap-5">
            <img className="w-12 rounded-full" src={`${user ? user.photoURL : Userimg}`} alt="" />
            {
              user ? (<button onClick={handleLogout} className="btn btn-primary px-10">Logout</button>):(<Link to="/auth/login" className="btn btn-primary px-10">Login</Link>)
            }
           
      </div>
    </div>
  );
};

export default Navbar;
