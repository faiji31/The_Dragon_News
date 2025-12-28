import React from 'react';
import Swim from "../assets/swimming.png";
import Play from "../assets/playground.png";
import Class from "../assets/class.png";
const Qzone = () => {
      return (
            <div className='bg-base-200 p-3'>
                  <h3 className='font-bold mb-10'>Qzone</h3>
                  <div>
                    <img src={Swim} alt="" />
                      <img src={Play} alt="" />
                        <img src={Class} alt="" />
                    
                  </div>
            </div>
      );
};

export default Qzone;