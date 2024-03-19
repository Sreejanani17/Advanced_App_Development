import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/forgotpassword.css'
import loginbg from '../../assets/images/reset-img.png';

const Forgot2 = () => {
  return (
    <div className='login-whole'>
    <div className='login-img'>
      <img src={loginbg} height={'693px'} width={'700px'}></img>
    </div>      
    <div className="form-container">     
    <form className="login-form">
    <h2 className='heading'>RESET PASSWORD</h2>
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
        <Link to="/login"><button type="submit" className='login-button'>Submit</button></Link>      
              
    </form>
  </div>
</div>

  );
}

export default Forgot2