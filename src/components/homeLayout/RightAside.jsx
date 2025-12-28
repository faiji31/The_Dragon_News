import React from 'react';
import SocialLayout from '../../Layout/SocialLayout';
import FindUs from '../../Layout/FindUs';
import Qzone from '../../Layout/Qzone';

const RightAside = () => {
      return (
            <div className='space-y-9'>
                  <SocialLayout></SocialLayout>
                  <FindUs></FindUs>
                  <Qzone></Qzone>
            </div>
      );
};

export default RightAside;