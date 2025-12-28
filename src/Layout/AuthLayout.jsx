import React from 'react';
import Navbar from '../components/Nvabar/Navbar';

const AuthLayout = () => {
      return (
            <div className='bg-base-200 min-h-screen'>
                  <header className='w-11/12 mx-auto py-5'>
                        <Navbar></Navbar>
                  </header>
            </div>
      );
};

export default AuthLayout;