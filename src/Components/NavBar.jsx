import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'

const NavBar = () => {
    return (
        <div className='flex justify-between mx- mt-9 items-center'>
            <div></div>
            <div className='nav flex gap-15 font-semibold '>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-3'>
<img src={user} alt="" />
                <Link to='/auth/login'><button className='btn btn-primary'>Login</button></Link>
            </div>
        </div>
    );
};

export default NavBar;