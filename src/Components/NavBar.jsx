import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
    const {user,logOut}=use(AuthContext)
    const handleLogOut=()=>{
       
        logOut().then(() => {
            alert('Logged Out')
          }).catch((error) => {
            console.log(error);
            
          });
    }
    return (
        <div className='flex justify-between mx- mt-9 items-center'>
            <div>{user && user.email}</div>
            <div className='nav flex gap-15 font-semibold '>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-3'>
<img src={userImg} alt="" />
                {
                    user ? (<button onClick={handleLogOut} className='btn btn-primary'>Log Out</button>) : (<Link to='/auth/login'><button className='btn btn-primary'>Login</button></Link>)


                    
                }
            </div>
        </div>
    );
};

export default NavBar;