import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-bold mb-5 ">Find Us</h3>
      <div className="join join-vertical w-full gap-5">
        <button className="btn join-item "><FaFacebook /> Facebook</button>
        <button className="btn join-item "><FaTwitter /> Twitter</button>
        <button className="btn join-item "><FaInstagramSquare /> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
