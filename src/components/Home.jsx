import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Home = () => {
      return (
            <div className='flex justify-center flex-col items-center gap-3'>
                <img className='w-90' src={logo} alt="" />
                <p className='text-accent'>Journalism Without Fear and Favour</p>
                <p>{format(new Date(), "EEEE, MMMM do, yyyy")}</p>
                
            </div>
      );
};

export default Home;