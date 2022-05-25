import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  AOS.init()

  return (
    <>
      <div className="bg2 py-5" id="about">
        <div className="container py-5">
          <div className="row justify-content-center text-white shadow-lg py-5" data-aos={"zoom-in"} data-aos-duration={"2000"}>
            <div className="col-md-12 text-center py-3" data-aos={"fade-down"} data-aos-duration={"3000"} >
              <h1>About Team</h1>
            </div>
            <div className="col-md-6 text-center" data-aos={"fade-up"} data-aos-duration={"3000"}>
              <h4>
                This team consists of 2 students from 11th grade software
                engineering students who attend SMKN 7 PONTIANAK
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
