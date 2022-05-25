import React from 'react'
import wa from "../../asset/brands/Vector-2.png"
import ig from "../../asset/brands/Vector-1.png"

const ContactSabrina = () => {
  return (
    <>
      <div className="bgContact py-5">
        <div className="container py-5">
          <div className="row justify-content-center text-white" style={{ padding : "50px 100px 250px" }}>
            <div className="col-md-12 text-center py-4">
              <h1>Contact</h1>
            </div>
            <div className="col-md-3 bgContactImg text-center shadow py-5 m-2" style={{ borderRadius : "20px" }}>
              <p>
                <a className="text-white" href="https://www.instagram.com/sabrinaaau_/">
                  <img src={ig} />
                  <h3>Instagram</h3>
                </a>
              </p>
            </div>
            <div className="col-md-3 bgContactImg text-center shadow py-5 m-2" style={{ borderRadius : "20px" }}>
              <p>
                <a className="text-white" href="https://wa.me/6281545454765">
                  <img src={wa} />
                  <h3>WhatsApp</h3>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSabrina