import React from 'react';
import banner from '../img/portfolio/p1.jpg';
import banner2 from '../img/portfolio/p2.jpg';
import banner3 from '../img/portfolio/p3.jpg';

const CarouselComponent = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={banner} alt="Project 1" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={banner2} alt="Project 2" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={banner3} alt="Project 3" />
        </div>
      </div>
      
      <script src="../libraries/jquery-3.2.1.min.js"></script>
      <link rel="stylesheet" href="../libraries/bootstrap.js" />
    </div>
  );
};

export default CarouselComponent;
