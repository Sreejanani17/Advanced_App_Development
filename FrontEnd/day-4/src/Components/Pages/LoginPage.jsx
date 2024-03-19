import React from 'react';

import { Link } from 'react-router-dom';
import '../../assets/css/login.css';
import loginbg from '../../assets/images/login.png';

export default function LoginPage() {
  return (
  <div className='login-whole'>
      <div className='login-img'>
        <img src={loginbg} height={'693px'} width={'700px'}></img>
      </div>      
      <div className="form-container">     
      <form className="login-form">
      <h2 className='heading'>LOGIN</h2>
        <div className="form-group">
          <label htmlFor="username">
            <img src="programmer.png" alt="Username" className="icon" />
          </label>
          <input type="text" id="username" placeholder="Username" />
          <hr className="line" />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <img src="padlock.png" alt="Password" className="icon" />
          </label>
          <input type="password" id="password" placeholder="Password" />
          <hr className="line" />
        </div>
          <Link to="/"><button type="submit" className='login-button'>Sign in</button></Link>
          <br></br>
          <Link to="/register"><div className='down-signup' type='text'><button>Dont have an account? Sign Up</button></div></Link>
          <br></br>
          <Link to="/forgotpasswordenterdetails"><div className='down-forgot' type='text'><button>Forgot your password? Click Here</button></div></Link>
          
      </form>
    </div>
  </div>
  
  
  );
}

