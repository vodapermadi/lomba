import React from "react";
import "../../template/style.css";
import voda from "../../asset/profil/vodapermadi.png";

const Header = () => {
  return (
    <>
      <div className="bg3 py-5" style={{ fontFamily: "Nunito,sans-serif" }} id="voda" >
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-md-12 text-center">
              <p>
                <h4 className="text-white fw-bold" data-aos={"fade-down"} data-aos-duration={"2500"} >Front End Developer</h4>
                <img
                  src={voda}
                  style={{
                    width: "300px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                  className="shadow"
                  data-aos={"zoom-in"}
                  data-aos-duration={"1500"}
                />
                <h4 className="text-white mt-3" data-aos={"fade-up"} data-aos-duration={"2500"} >Philipus Voda Permadi</h4>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
