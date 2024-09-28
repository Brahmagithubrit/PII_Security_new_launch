import React from 'react'
import Home_Img from '../Assets/home_img.jpg'
import '../Styles/home.css'


export default function Home() {                  

  return (
    <>
      <div className='root_home'>
        <img  className="home_img" src={Home_Img} alt="" />
      </div>

      {/* <div className="home_Card">       <p className="home_content">Protect Your Personal Information from Fraud</p>
      </div> */}
      <div className="home_content">
      </div>
    </>
  )
}


