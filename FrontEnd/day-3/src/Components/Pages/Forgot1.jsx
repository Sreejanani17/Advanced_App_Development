import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/forgotpassword.css'
import loginbg from '../../assets/images/pass-img.png';

const Forgot1 = () => {
  return (
    <div className='login-whole'>
    <div className='login-img'>
      <img src={loginbg} height={'693px'} width={'700px'}></img>
    </div>      
    <div className="form-container">     
    <form className="login-form">
    <h2 className='heading'>FORGOT PASSWORD?</h2>
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
        <Link to="/forgotpasswordresetpassword"><button type="submit" className='login-button'>Enter</button></Link>
        
       
        
    </form>
  </div>
</div>

  );
}

export default Forgot1