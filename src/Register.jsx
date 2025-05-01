import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
             
            <div className="hero bg-base-200 min-h-screen">
    
    <div className="card bg-base-100 p-5 rounded-2xl w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-4xl text-accent mb-10 font-bold text-center">Register now!</h1>
        <fieldset className="fieldset">
          <label className="label font-semibold">Name</label>
          <input type="text" className="input" placeholder="Enter your name" />
          <label className="label font-semibold">Email</label>
          <input type="email" className="input" placeholder="E mail" />
          <label className="label font-semibold">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Login</button>

          <p className='text-accent font-semibold text-center mt-3'>Already Have An Account ? <Link to='/auth/login'> <span className='text-orange-700 font-semibold'>Login now</span></Link></p>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;