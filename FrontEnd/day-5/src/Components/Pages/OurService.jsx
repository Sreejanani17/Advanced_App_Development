import React from 'react'
import NavBar from '../Utilis/NavBar'
import '../../assets/css/ourservice.css'
import { Link } from 'react-router-dom'
import { Footer } from '../Utilis/Footer'

const OurService = () => {
  return (
    <div>

    <div><NavBar/></div>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <div className='mainservice-heading'>OUR SERVICES</div>
    <div className="sercontainer">
      <div className="serservices">
        <div className="serservice">
          <h2>Wedding</h2>
          <p className='para-txt'>Neon Night Events offers comprehensive wedding packages for all types of wedding celebrations. Pre Wedding, Wedding, and Post Wedding functions.
          <div className="serbutton-box"><br></br>
          <button className="sercentered-button">Click Me</button>
          </div>
          </p>
          
        </div>
        <div className="serservice">
          <h2>Social Events</h2>
          <p className='para-txt'>
          Organizing social events including wedding event, birthday celebrations, party event, milestone anniversaries, exhibition event, baby showers, themed graduation and many more
          <div className="serbutton-box"><br></br>
      <button className="sercentered-button">Click Me</button>
    </div>
          </p>
        </div>
        <div className="serservice">
          <h2>Personal Events</h2>
          <p className='para-txt'>
          Organizing social events including wedding event, birthday celebrations, party event, milestone anniversaries, exhibition event, baby showers, themed graduation and many more
          <div className="serbutton-box"><br></br>
      <button className="sercentered-button">Click Me</button>
    </div>
          </p>
        </div>
        <div className="serservice">
          <h2>Corporate Events</h2>
          <p className='para-txt'>
          Neon Night Events offers highly competitive rates and concepts for Corporate Events. From Meetings, Incentives, to Product Launches, Inaugurations.
          <br></br>
          <div className="serbutton-box">
      <button className="sercentered-button">Click Me</button>
    </div>
          </p>
        </div>
      </div>
    </div>
    <br></br><br></br>
    <div className='service-in'>
    <div className="container-our">
      <div className="centered-boxour">
        <div className="serviceparagraph-box">
          <h2>YOUR DREAM, OUR GOAL</h2>
          <p>Our creativity and expertise can help you plan and deliver exceptional events</p>
          <Link to='/contactus'><button className="servicecentered-button">Get in Touch</button></Link>
        </div>
      </div>
    </div>
    {/* <div className='imag'><img scr="Designer.png"></img></div> */}
    </div><br></br><br></br><br></br><br></br><br></br><br></br>
      <div><Footer/></div>
    </div>
  )
}

export default OurService