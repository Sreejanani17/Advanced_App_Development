import React from 'react'
import '../../assets/css/sidebar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
        <div class="sidebar">
  {/* <div class="logo">
    <img src="logo.png" alt="Logo"></img>
    <br></br><br></br>
  </div> */}
  <h1 className='head'>Neon Night</h1>
  <ul>
    <li><a href="/dashboard">Dashboard</a></li>
    <li><a href="/eventdetails">Events</a></li>
    <li><a href="/bookingstatus">Booking Status</a></li>
    <li><a href="/paymentstatus">Payment Status</a></li>
    <li><a href="/userdetails">User</a></li>
    <li><a href="/feedback">Feedback</a></li>
    <li><a href="/venuedetails">Venue</a></li>
    
  </ul>
  <Link to="/login"><button class="sidebar-button">Logout</button></Link>
</div>
    </div>
  )
}

export default SideBar