import React from 'react'
import NavBar from '../Utilis/NavBar'
import '../../assets/css/home.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../Utilis/Footer';
import loginbg from '../../assets/images/login.png';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      <div> <NavBar /> <br></br><br></br><br></br><br></br><br></br></div>      
      <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`full-screen-image ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}     
    </div>    
    
      <p className='homeparagraph-text'>
        <div className='homeheading1'>Neon Night Events</div>
        <div className='homeheading2'>A Complete Event Management Solution</div>
      </p>
   
      <div className="homecontainer">
      <div className="homeparagraph-box">
        <p className="homeparagraph">
        Neon Night Events is known for planning and designing events. We have created a planning experience that is as thorough as it is seamless, bringing a customized and tailored planning experience to those who value
        the of hosting, and desire to create an approachable, detail rich, wedding celebration.
        </p>
        <p className="homeuneven-paragraph">
        We provide an unparalleled level of and attention to detail, allowing us to fully understand the intricacies of what makes your relationship unique to you as a couple, and limit our bookings to ensure we are able to uphold our incredibly high standards of service. We are so excited you are here, and cannot wait to meet you and begin creating a celebration as special as your love story.
         
        </p>        
      </div>
    </div>
    <Link to='/about'><div className='center'><button>Read More About</button></div></Link>
   <br></br><br></br><br></br>
   <div className="homescontainer">
      <Box>
        <p className='para-box'>Neon Night Events is a premier wedding planning service dedicated to turning your dream wedding into a breathtaking reality. With a keen eye for detail and a passion for creativity, Neon Night Events specializes in curating unforgettable experiences tailored to each couple's unique vision.

Led by a team of seasoned professionals, Neon Night Events takes pride in offering personalized attention from the initial consultation to the final moments of your special day. From selecting the perfect venue to coordinating vendors and managing every aspect of the event, their expertise ensures a seamless planning process and a stress-free wedding day.
Whether you envision an intimate ceremony under the stars or a lavish celebration in a grand ballroom, Neon Night Events has the experience and resources to bring your dreams to life. With their unwavering commitment to excellence and unparalleled dedication to client satisfaction, Neon Night Events sets the stage for a truly unforgettable wedding experience that exceeds expectations.
</p>
      </Box>
      <Box>
        <img src="Designer.png" alt="Image 1" />
      </Box>
      
      <Box>
        <img src={loginbg} alt="Image 2" />
      </Box>
      <Box>
        <p className='para-box'>Neon Night Events is more than just a wedding planning service; it's an embodiment of dreams woven into reality. With meticulous attention to detail and a flair for creativity, Neon Night Events transforms your wedding aspirations into a captivating tapestry of love and celebration. Guided by a team of seasoned professionals, each event is meticulously curated, ensuring that every moment resonates with elegance and charm. From conceptualization to execution, Neon Night Events orchestrates every aspect of your special day with finesse and precision, allowing you to revel in the joy of your union without a worry. With Neon Night Events at the helm, your wedding becomes a radiant affair, etched in memories that last a lifetime.
        
        </p>
      </Box>
    </div>
   <br></br><br></br><br></br><br></br><br></br>
   <div><Footer/></div>

    </div>
  )
}
function Box({ children }) {
  return (
    <div className="homesbox">
      {children}
    </div>
  );
}
export default Home