import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './Provider/AuthProvider';

const Register = () => {
  const{createUser,setUser}=use(AuthContext)
  const handleRegister=(e)=>{
e.preventDefault()
console.log(e.target);
const name=e.target.name.value
const photo=e.target.photo.value
const email=e.target.email.value
const password=e.target.password.value
console.log({name,photo,email,password});
createUser(email,password)
  .then((result)=>{
    const user=result.user
    // console.log(user);
    setUser(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

  }
    return (
        <div>
             
            <div className="hero bg-base-200 min-h-screen">
    
    <div className="card bg-base-100 p-5 rounded-2xl w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
      <h1 className="text-4xl text-accent mb-10 font-bold text-center">Register now!</h1>
        <fieldset className="fieldset">
          <label className="label font-semibold">Name</label>
          <input type="text" required name='name' className="input" placeholder="Enter your name" />
          <label className="label font-semibold">Photo</label>
          <input type="text"required name='photo' className="input" placeholder="Photo URL" />
          <label className="label font-semibold">Email</label>
          <input type="email" required name='email' className="input" placeholder="E mail" />
          <label className="label font-semibold">Password</label>
          <input type="password" required name='password' className="input" placeholder="Password" />
          
          <button type='submit' className="btn btn-neutral mt-4">Register</button>

          <p className='text-accent font-semibold text-center mt-3'>Already Have An Account ? <Link to='/auth/login'> <span className='text-orange-700 font-semibold'>Login now</span></Link></p>
        </fieldset>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;