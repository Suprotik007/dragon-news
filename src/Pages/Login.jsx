import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {signIn}=use(AuthContext)
  const handleLogin=(e)=>{
    e.preventDefault()
    console.log(e.target);
  
    const email=e.target.email.value
    const password=e.target.password.value
    console.log({email,password})
    signIn(email,password)
    .then((result)=>{
      const user=result.user
      console.log(user);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode,errorMessage)
    });
  }


    return (
        <div>
             
            <div className="hero bg-base-200 min-h-screen">
    
    <div className="card bg-base-100 p-5 rounded-2xl w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-4xl text-accent mb-10 font-bold text-center">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label font-semibold">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label font-semibold">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover text-accent font-semibold">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>

          <p className='text-accent font-semibold text-center mt-3'>Dont’t Have An Account ? <Link to='/auth/reg'> <span className='text-orange-700 font-semibold'>Register</span></Link></p>
        </form>
      </div>
    </div>
  </div>
</div>
        
    );
};

export default Login;