import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-5'>
            <img className='w-[350px]' src={logo} alt="" />
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
       <p className='text-accent text-semibold'>{format(new Date(),"EEEE,MMMM MM,yyyy")}</p>
        </div>
    );
};

export default Header;