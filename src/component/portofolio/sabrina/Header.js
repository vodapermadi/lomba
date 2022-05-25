import React from 'react'
import sabrina from "../../asset/profil/sabrina.png"
import "../../template/style.css"

const HeaderSabrina = () => {
  return (
    <>
      <div className='py-5 bg3' id="sabrina">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-white text-center">
              <p>
                <h4>UI / UX Designer</h4>
                <img src={sabrina} style={{ width : "300px" , borderRadius : "50%", backgroundColor : "rgba(0, 0, 0, 0.4)" }} />
                <h4>Sabrina Utami</h4>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderSabrina