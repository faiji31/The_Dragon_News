import React from 'react';
import { Outlet } from 'react-router';
import Home from '../components/Home';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Nvabar/Navbar';
import LeftAside from '../components/homeLayout/LeftAside';
import RightAside from '../components/homeLayout/RightAside';

const HomeLayout = () => {
      return (
            <div>
                  <header>
                        <Home></Home>
                        {import.meta.env.VITE_name}
                        
                             <section className='w-11/12 mx-auto my-3'>
                              <LatestNews></LatestNews>
                           </section>
                          <nav className='w-11/12 mx-auto my-3'>
                              <Navbar></Navbar>
                          </nav>
                        
                  </header>
               
                  
                  <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
                       <aside className='col-span-3 sticky top-0 h-fit'>
                         <LeftAside></LeftAside>
                       </aside>
                        <section className='col-span-6'>
                              <Outlet></Outlet>
                        </section>
                       <aside className='col-span-3 sticky top-0 h-fit'>
                        <RightAside></RightAside>
                       </aside>
                  </main>
            </div>
      );
};

export default HomeLayout;