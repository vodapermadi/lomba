import React from "react";
import "../../template/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutVoda = () => {

  AOS.init()

  return (
    <>
      <div className="bg4 py-5">
        <div className="container py-5">
          <div
            className="row justify-content-center shadow-lg py-5 bgAboutVoda text-white"
            style={{ borderRadius: "20px" }}
            data-aos={"zoom-in"}
            data-aos-duration={"1500"}
          >
            <div className="col-md-12 text-center py-3">
              <h1 data-aos={"fade-right"} data-aos-duration={"2500"}>
                About Voda
              </h1>
            </div>
            <div className="col-md-6 text-center" data-aos={"fade-left"} data-aos-duration={"2500"}>
              <h4>
                I'm Philipus Voda Permadi, 16 years old. My hobby is making a
                website display and I started to explore the world of
                programming for about 1 year
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVoda;
