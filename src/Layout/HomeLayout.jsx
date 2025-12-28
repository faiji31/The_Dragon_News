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
                        
                             <section className='w-11/12 mx-auto my-3'>
                              <LatestNews></LatestNews>
                           </section>
                          <nav className='w-11/12 mx-auto my-3'>
                              <Navbar></Navbar>
                          </nav>
                        
                  </header>
               
                  
                  <main>
                       <aside>
                         <LeftAside></LeftAside>
                       </aside>
                        <section className='main'>
                              <Outlet></Outlet>
                        </section>
                       <aside>
                        <RightAside></RightAside>
                       </aside>
                  </main>
            </div>
      );
};

export default HomeLayout;