import React from "react";
import bg1 from "../images/premium_photo-1683288295841-782fa47e4770.avif";
import ceo from "../images/ceo.avif";
import techie from "../images/techie.avif";
import director from "../images/director.avif";
import cto from "../images/cto.avif";
import brainy from "../images/brainy.avif";
import accountant from "../images/accountant.avif";

const About = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.5)),url(${bg1})`,
          height: "500px",
          marginTop: "-100px",
        }}
      ></div>
      {/* <h5 style={{ marginTop: "-200px" }}>New Arrivals</h5> */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-4 mb-5">
            <img
              src={ceo}
              alt=""
              style={{ height: "200px", width: "200px", borderRadius: "50%" }}
            />
            <div className="ms-5">
              <h5>Joel Doe</h5>
              <p>CEO</p>
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src={techie}
              alt=""
              style={{ height: "200px", width: "200px", borderRadius: "50%" }}
            />
            <div className="ms-5">
              <h5>Uche Doe</h5>
              <p>Techie</p>
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src={accountant}
              alt=""
              style={{ height: "200px", width: "200px", borderRadius: "50%" }}
            />
            <div className="ms-5">
              <h5>Ademola Doe</h5>
              <p>Acc.</p>
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src={director}
              alt=""
              style={{ height: "200px", width: "200px", borderRadius: "50%" }}
            />
            <div className="ms-5">
              <h5>Runny Doe</h5>
              <p>Director</p>
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src={cto}
              alt=""
              style={{ height: "200px", width: "200px", borderRadius: "50%" }}
            />
            <div className="ms-5">
              <h5>Peter Doe</h5>
              <p>CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
