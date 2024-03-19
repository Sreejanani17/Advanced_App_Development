import React from "react";
import { BrowserRouter, Route, Routes}from 'react-router-dom';
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import SignUpPage from "./Components/Pages/SignUpPage";
import LoginPage from "./Components/Pages/LoginPage";
import Forgot1 from "./Components/Pages/Forgot1";
import Forgot2 from "./Components/Pages/Forgot2";
import OurService from "./Components/Pages/OurService";
import ContactUs from "./Components/Pages/ContactUs";
import DashBoard from "./Components/Admin/DashBoard";
import PaymentStatus from "./Components/Admin/PaymentStatus";
import BookingStatus from "./Components/Admin/BookingStatus";
import PostEvent from "./Components/Admin/PostEvent";
import ViewEvent from "./Components/Admin/ViewEvent";

import User from "./Components/Admin/User";
import Feedback from "./Components/Admin/Feedback";
import EventDetails from "./Components/Admin/EventDetails";
import { VenueDetails } from "./Components/Admin/VenueDetails";


function App(){
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<SignUpPage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/forgotpasswordenterdetails" element={<Forgot1 />}/>
        <Route path="/forgotpasswordresetpassword" element={<Forgot2 />}/>
        <Route path="/ourservice" element={< OurService/>}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="dashboard" element={<DashBoard/>}></Route>
        <Route path="/eventdetails" element={<EventDetails/>}></Route>
        <Route path="/paymentstatus" element={<PaymentStatus/>}></Route>
        <Route path="/bookingstatus" element={<BookingStatus/>}></Route>
        <Route path="/postevent" element={<PostEvent/>}></Route>
        <Route path="/viewevent" element={<ViewEvent/>}></Route>
        <Route path="/userdetails" element={<User/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/venuedetails" element={<VenueDetails/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App