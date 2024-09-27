import React from 'react';
import '../Styles/caro.css'


const CarouselComponent = () => {
  return (
         <>
         <div className="caro">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://via.placeholder.com/800x400?text=First+Slide" className="d-block w-100" alt="First Slide" />
              </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/800x400?text=Second+Slide" className="d-block w-100" alt="Second Slide" />
              </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/800x400?text=Third+Slide" className="d-block w-100" alt="Third Slide" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
         </>
  );
};

export default CarouselComponent;
