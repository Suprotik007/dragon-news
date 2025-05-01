import React from 'react';
import Marquee from "react-fast-marquee";
const Latest = () => {
    return (
        <div className='flex  mt-8 gap-5 bg-base-200'>
          <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
       <Marquee className='gap-8 'pauseOnHover={true} speed={80}> 
       <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
       <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi laboriosa. </p>
       <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
       </Marquee>
        </div>
    );
};

export default Latest;