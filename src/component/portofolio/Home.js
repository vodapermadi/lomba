import React from "react";
import NavbarComponent from "../template/NavbarComponent";
import voda from "../asset/profil/vodapermadi.png";
import sabrina from "../asset/profil/sabrina.png";
import "../template/style.css";
import About from "./About";
import Line from "./Line";
import Header from "./voda/Header";
import AboutVoda from "./voda/About";
import SkillVoda from "./voda/Skill";
import ContactVoda from "./voda/Contact";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <div className="bg1 py-5" style={{ fontFamily: "Nunito,sans-serif" }}>
        <div className="container px-3" style={{ padding: "100px" }} id="home">
          <div className="row shadow justify-content-center px-5 bgprofil" style={{ borderRadius : "30px" }} >
            <div className="col-md-12 text-center py-5 text-white">
              <div>
                <h1>Name-Team</h1>
                <h3>
                here are the members of the team-name
                </h3>
              </div>
            </div>
            <div className="col mx-2 mb-5 shadow py-4" style={{ borderRadius : "20px" }}>
              <p className="text-center">
                <h5 className="mb-2 text-white fw-bold">Front-End Dev</h5>
                <img src={voda} style={{ width: "300px" }} className="shadow" />
                <a
                  className="btn buttonColor text-white mt-2"
                  style={{ width: "300px" , outline : "2px solid #00A8CC" }}
                  href="/"
                >
                  Voda Permadi
                </a>
              </p>
            </div>
            <div className="col mx-2 mb-5 shadow py-4">
              <p className="text-center">
                <h5 className="mb-2 text-white fw-bold">UI/UX designer</h5>
                <img
                  src={sabrina}
                  className="shadow"
                  style={{ width: "300px" }}
                />
                <a
                  className="btn buttonColor text-white mt-2"
                  style={{ width: "300px" , outline : "2px solid #00A8CC" }}
                  href="/"
                >
                  Sabrina Utami
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Line/>
      <Header/>
      <AboutVoda/>
      <SkillVoda/>
      <ContactVoda/>
      <Line/>
    </>
  );
};

export default Home;
