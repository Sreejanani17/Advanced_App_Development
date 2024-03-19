import React from 'react'
import { Link } from 'react-router-dom';
import loginbg from '../../assets/images/sign.png';
import '../../assets/css/signup.css';

const SignUpPage = () => {
  return (
    <div className='login-whole'>
      <div className='login-img'>
        <img src={loginbg} height={'693px'} width={'700px'}></img>
      </div>      
      <div className="form-container">     
      <form className="login-form">
      <h2 className='heading'>SIGN UP</h2>
      <div className="form-group">
          <label htmlFor="name">
            <img src="id-card.png" alt="Name" className="icon" />
          </label>
          <input type="text" id="name" placeholder="Name" />
          <hr className="line" />
        </div>
        <div className="form-group">
          <label htmlFor="username">
            <img src="programmer.png" alt="Username" className="icon" />
          </label>
          <input type="text" id="username" placeholder="Username" />
          <hr className="line" />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <img src="gmail.png" alt="Email" className="icon" />
          </label>
          <input type="text" id="email" placeholder="Email" />
          <hr className="line" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            <img src="phone.png" alt="Phone" className="icon" />
          </label>
          <input type="text" id="phone" placeholder="Phone Number" />
          <hr className="line" />
        </div>
        <div className="form-group">
          <label htmlFor="npassword">
            <img src="padlock.png" alt="New Password" className="icon" />
          </label>
          <input type="password" id="npassword" placeholder="New Password" />
          <hr className="line" />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">
            <img src="unlock.png" alt="Confirm Password" className="icon" />
          </label>
          <input type="password" id="cpassword" placeholder="Confirm Password" />
          <hr className="line" />
        </div>

         <Link to="/login"><button type="submit" className='login-button'>Sign up</button></Link> 
      </form>
    </div>
  </div>
  )
}

export default SignUpPage