import React from 'react'
import sabrina from "../../asset/profil/sabrina.png"
import "../../template/style.css"
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderSabrina = () => {

  AOS.init()

  return (
    <>
      <div className='py-5 bg3' id="sabrina">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-white text-center">
              <p>
                <h4 data-aos={"fade-down"} data-aos-duration={"2500"} >UI / UX Designer</h4>
                <img src={sabrina} data-aos={"zoom-in"} data-aos-duration={"1500"} style={{ width : "300px" , borderRadius : "50%", backgroundColor : "rgba(0, 0, 0, 0.4)" }} />
                <h4 data-aos={"fade-up"} data-aos-duration={"1500"}>Sabrina Utami</h4>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderSabrina