import React from 'react'
import NavBar from '../Utilis/NavBar'
import { Footer } from '../Utilis/Footer'

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <div className='contact-page'>
        <div className='contact-info'>
          <h1 className='topic-head'>Contact Information</h1>
          <ul>
            <li><strong>Email:</strong> contact@example.com</li>
            <li><strong>Phone:</strong> +1 123-456-7890</li>
            <li><strong>Address:</strong> 123 Main Street, City, Country</li>
          </ul>
        </div>
        <div className='contact-form'>
          <h1 className='topic-head'>Send us a message</h1>
          <form>
            <div className='form-groups'>
              <label htmlFor="username">Username</label>
              {/* <input type='text' id="username" name="username" required /> */}
              <textarea></textarea>
            </div>
            <div className='form-groups'>
              <label htmlFor="email">Email</label>
              {/* <input type='email' id="email" name="email" required /> */}
              <textarea></textarea>
            </div>
            <div className='form-groups'>
              <label htmlFor="phone">Phone</label>
              {/* <input type='tel' id="phone" name="phone" required /> */}
              <textarea></textarea>
            </div>
            <div className='form-groups'>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <br></br> <br></br> <br></br> <br></br>
      <Footer />
    </div>
  )
}

export default ContactUs