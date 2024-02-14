import React, { useRef } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'
import ContactUs from './contactUs'

export default function Navbar() {

  let conatct_num = useRef()
  const submitOTP = (event) => {
    console.log(conatct_num.current.value);
    event.preventDefault()
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light m-3" style={{ backgroundColor: "rgb(100, 208, 227)" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/home"><img src="https://static.vecteezy.com/system/resources/thumbnails/006/626/965/small/beach-island-landscape-logo-beach-logo-design-beach-logo-outdoor-summer-travel-sun-stock-free-vector.jpg" alt='' height={60} width={60} style={{ backgroundColor: "rgb(100, 208, 227)", borderRadius: "50%" }} />&nbsp;<b><i>myTrip</i></b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={'/home'} className="nav-link " aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/aboutUs'} className="nav-link " aria-current="page" >About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/contact'} className="nav-link " aria-current="page" >Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/media'} className="nav-link " aria-current="page" >Media</NavLink>
              </li>


            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/form'}  >
                  {/* <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/inquiry-2640319-2188873.png' alt='...' height={40} width={40} />  */}
                  <b style={{ color: "black" }}> Quick Inquiry</b>

                </Link>
              </li> &nbsp;&nbsp;
              &nbsp;&nbsp;

            </ul>
            {/* Login div start here */}

            {/* <!-- Button trigger modal --> */}
            <Link data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src='https://www.mapleflake.com/images/login-icon.png' alt='...' height={40} width={40} /> <b style={{ color: "black" }}>Login</b>
            </Link>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 text-center" style={{ textAlign: "center" }} id="exampleModalLabel">Welcome to Mytrip World</h1>

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                  </div>
                  <div className="modal-body">
                    <p style={{ textAlign: "center" }}>Please enter your mobile number to receive </p>
                    <p style={{ textAlign: "center" }}>a verification code</p>
                    <form>
                      <input className="form-control  bg-warning bg-opacity-50" size="30" type="tel" id="demo" ref={conatct_num} placeholder="+91 9999 888 777" style={{ marginLeft: "0px", marginRight: "30px" }} />
                    </form>
                    <div style={{ marginLeft: "130px" }}> <button type="button " onClick={submitOTP} className="btn btn-warning m-4" style={{ marginLeft: "50px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Request OTP
                    </button></div>
                    <p>By continuing you agree to our <a href="..."> Terms</a> of Use & Privacy Policy</p>

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Submit</button>

                  </div>
                </div>
              </div>
            </div>






          </div>
        </div>
      </nav>
      <ContactUs />
      {/* <div class="sticky-bottom d-flex justify-content-end"><button >Hello</button></div> */}
      <Outlet />
      <Footer />
    </div>
  )
}
