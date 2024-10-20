import React from "react";
import Home_Img from "../Assets/home_img.jpg";
import "../Styles/home.css";

export default function Home() {
 return (
   <div className="hero-container">
     <video autoPlay  muted playsInline className="hero-video">
       <source src="/Home_video_1.mp4" type="video/mp4" />
       Your browser does not support the video tag.
     </video>
     <div className="hero-content">
       <h1>Welcome to Our Website</h1>
       <p>Protect Your Personal Information from Fraud</p>
     </div>
   </div>
 );
}
