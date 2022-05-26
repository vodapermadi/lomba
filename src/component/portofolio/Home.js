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
import HeaderSabrina from "./sabrina/Header";
import AboutSabrina from "./sabrina/About";
import ContactSabrina from "./sabrina/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init();

  return (
    <>
      <NavbarComponent />
      <div
        className="bg1 py-5"
        style={{ fontFamily: "Nunito,sans-serif" }}
      >
        <div
          className="container text-center bgprofil py-5 mt-5 text-white"
          style={{ borderRadius: "20px" }}
        >
          <h1>TeamName</h1>
          <h4>Here are the members of the TeamName</h4>
          <div className="row justify-content-center text-center py-4">
            <div className="col text-center shadow mx-2 py-4">
              <p>
                <img src={voda} alt="vodapermadi" style={{ width: "300px", borderRadius: "20px" }}  />
              </p>
                <a href="#voda" className="btn buttonColor text-white" style={{ width : "300px", outline: "2px solid #00A8CC"}} >Voda Permadi</a>
            </div>
            <div className="col text-center shadow mx-2 p-4">
              <p>
                <img src={sabrina} alt="sabrinautami" className="img" style={{ width: "300px", borderRadius:"20px" }} />
              </p>
                <a href="#sabrina" className="btn buttonColor text-white" style={{ width:"300px", outline: "2px solid #00A8CC" }}>Sabrina Utami</a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Line />
      <Header />
      <AboutVoda />
      <SkillVoda />
      <ContactVoda />
      <Line />
      <HeaderSabrina />
      <AboutSabrina />
      <ContactSabrina />
    </>
  );
};

export default Home;
