import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const SocialLayout = () => {
      return (
            <div className='font-bold mb-5'>
                Login With
                <div className='space-y-3'>
                  <button className='btn btn-outline w-full btn-secondary'><FaGoogle /> Login with Google</button>
                  <button className='btn btn-outline w-full btn-primary'><FaGithub /> Login with Github</button>
                </div>
            </div>
      );
};

export default SocialLayout;