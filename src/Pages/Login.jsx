import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
             
            <div className="hero bg-base-200 min-h-screen">
    
    <div className="card bg-base-100 p-5 rounded-2xl w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-4xl text-accent mb-10 font-bold text-center">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label font-semibold">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label font-semibold">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover text-accent font-semibold">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>

          <p className='text-accent font-semibold text-center mt-3'>Dont’t Have An Account ? <Link to='/auth/reg'> <span className='text-orange-700 font-semibold'>Register</span></Link></p>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        
    );
};

export default Login;