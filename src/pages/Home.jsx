import React from "react";
import babyGirl from "../images/cute-kid-with-abacus-studio.jpg";
import bg1 from "../images/photo-1648212094405-fe7d614e6d38.avif";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.5)),url(${bg1})`,
          height: "200px",
          marginTop: "-100px",
        }}
      ></div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={babyGirl} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={babyGirl} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={babyGirl} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
