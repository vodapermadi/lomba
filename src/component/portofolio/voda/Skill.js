import React from "react";
import "../../template/style.css"
import js from "../../asset/brands/js.png"
import react from "../../asset/brands/react.png"
import php from "../../asset/brands/php.png"
import python from "../../asset/brands/python.png"
import laravel from "../../asset/brands/laravel.png"

const SkillVoda = () => {
  return (
    <>
      <div className="bg4 py-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center py-5 text-white">
            <div className="col-md-12">
                <h1>Skill</h1>
            </div>
            <div className="col-md-3 text-center shadow py-5 bgSkillVoda m-4" style={{ borderRadius : "20px" }} >
                <p >
                    <img src={js} style={{ width : "150px" }} />
                </p>
            </div>
            <div className="col-md-3 text-center shadow py-5 bgSkillVoda m-4" style={{ borderRadius : "20px" }} >
                <p >
                    <img src={react} style={{ width : "150px" }} />
                </p>
            </div>
            <div className="col-md-3 text-center shadow py-5 bgSkillVoda m-4" style={{ borderRadius : "20px" }} >
                <p >
                    <img src={php} style={{ width : "150px" }} />
                </p>
            </div>
            <div className="col-md-3 text-center shadow py-5 bgSkillVoda m-4" style={{ borderRadius : "20px" }} >
                <p >
                    <img src={laravel} style={{ width : "150px" }} />
                </p>
            </div>
            <div className="col-md-3 text-center shadow py-5 bgSkillVoda m-4" style={{ borderRadius : "20px" }} >
                <p >
                    <img src={python} style={{ width : "150px" }} />
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillVoda;
