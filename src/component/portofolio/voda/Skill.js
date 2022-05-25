import React from "react";
import "../../template/style.css";
import js from "../../asset/brands/js.png";
import react from "../../asset/brands/react.png";
import php from "../../asset/brands/php.png";
import python from "../../asset/brands/python.png";
import laravel from "../../asset/brands/laravel.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillVoda = () => {

  AOS.init()

  return (
    <>
      <div className="bg4 py-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center py-5 text-white">
            <div className="col-md-12">
              <h1 data-aos={"fade-down"} data-aos-duration={"1500"}>Skill</h1>
            </div>
            <div
              className="col-md-3 text-center shadow py-5 bgSkillVoda m-4"
              style={{ borderRadius: "20px" }}
              data-aos={"fade-up"}
              data-aos-duration={"1500"}
            >
              <p>
                <img src={js} style={{ width: "150px" }} data-aos={"zoom-in"} data-aos-duration={"2500"} />
              </p>
            </div>
            <div
              className="col-md-3 text-center shadow py-5 bgSkillVoda m-4"
              style={{ borderRadius: "20px" }}
              data-aos={"fade-up"}
              data-aos-duration={"1500"}
            >
              <p>
                <img src={react} style={{ width: "150px" }} data-aos={"zoom-in"} data-aos-duration={"2500"} />
              </p>
            </div>
            <div
              className="col-md-3 text-center shadow py-5 bgSkillVoda m-4"
              style={{ borderRadius: "20px" }}
              data-aos={"fade-up"}
              data-aos-duration={"1500"}
            >
              <p>
                <img src={php} style={{ width: "150px" }} data-aos={"zoom-in"} data-aos-duration={"2500"} />
              </p>
            </div>
            <div
              className="col-md-3 text-center shadow py-5 bgSkillVoda m-4"
              style={{ borderRadius: "20px" }}
              data-aos={"fade-up"}
              data-aos-duration={"1500"}
            >
              <p>
                <img src={laravel} style={{ width: "150px" }} data-aos={"zoom-in"} data-aos-duration={"2500"} />
              </p>
            </div>
            <div
              className="col-md-3 text-center shadow py-5 bgSkillVoda m-4"
              style={{ borderRadius: "20px" }}
              data-aos={"fade-up"}
              data-aos-duration={"1500"}
            >
              <p>
                <img src={python} style={{ width: "150px" }} data-aos={"zoom-in"} data-aos-duration={"2500"} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillVoda;
