import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div>


            <div class="card bg-dark text-white mt-5 border-0"  >
                <img src="https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg" class="card-img" alt="..." style={{ height: "400px", borderRadius: "20px" }} />
                <div class="card-img-overlay"><h1 style={{ color: "rgb(255, 195, 0)", textAlign: "center" }}> <img src="https://static.vecteezy.com/system/resources/thumbnails/006/626/965/small/beach-island-landscape-logo-beach-logo-design-beach-logo-outdoor-summer-travel-sun-stock-free-vector.jpg" alt='' height={50} width={50} style={{ backgroundColor: "rgb(100, 208, 227)", borderRadius: "50%" }} />&nbsp;<i>To Travel is to Live.</i></h1>


                    <div className="container text-center  justify-content-evenly  mt-5" >
                        <div className="row justify-content-evenly mb-2">

                            <div className="col justify-content-evenly">
                                <h3 style={{ color: "rgb(255, 195, 0)" }}>Contact Us</h3>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/022/179/613/small/contact-icon-in-flat-design-style-adress-book-or-phone-book-signs-illustration-png.png" className="img-fluid rounded-start" alt="..." style={{ height: "50px", width: "50px" }} />

                                <p style={{ color: "white" }}>7775888376423</p>
                            </div>
                            <div className="col justify-content-evenly">
                                <h3 style={{ color: "rgb(255, 195, 0)" }}>Mail Us</h3>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/008/509/301/small/3d-mail-email-message-icon-illustration-png.png" className="img-fluid rounded-start" alt="..." style={{ height: "50px", width: "50px" }} />

                                <p style={{ color: "white" }}>Kanchan@mail.com</p>
                            </div>
                            <div className="col justify-content-evenly">
                                <h3 style={{ color: "rgb(255, 195, 0)" }}><b>Visit Us</b></h3>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/009/370/618/small/golden-map-pin-sign-png.png" className="img-fluid rounded-start" alt="..." style={{ height: "50px", width: "50px" }} />

                                <p style={{ color: "white" }}>www.Kingdom.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="container text-center  justify-content-evenly  mt-3" >
                        <div className="row justify-content-evenly mb-2">

                            <div className="col justify-content-evenly">
                                <h3>For More</h3>
                                <NavLink to={"/home"} state={{ color: "red" }}><b style={{ color: "white" }}>Home</b></NavLink><br></br>
                                <NavLink to={"/aboutUs"}><b style={{ color: "white" }}>About Us</b></NavLink><br></br>
                                <NavLink to={"/contact"}><b style={{ color: "white" }}>Contact Us</b></NavLink><br></br>

                            </div>

                            <div className="col justify-content-evenly">
                                <p></p>
                                <NavLink to={"/carporate"} state={{ color: "red" }}><b style={{ color: "white" }}>Carporate</b></NavLink><br></br>
                                <NavLink to={"/custam"}><b style={{ color: "white" }}>Custamized</b></NavLink><br></br>
                                <NavLink to={"/india"}><b style={{ color: "white" }}>India</b></NavLink><br></br>
                                <NavLink to={"/international"}><b style={{ color: "white" }}>International</b></NavLink>
                            </div>


                            <div className="col justify-content-evenly mt-3">
                                <p></p><p></p><p></p>
                                <a href='https://www.facebook.com' target="_blank" ><img src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png' style={{ height: "50px", width: "50px" }} /></a> &nbsp;
                                <a href='https://www.instagram.com' target="_blank"><img src='https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg' style={{ height: "50px", width: "50px" }} /></a>&nbsp;&nbsp;
                                <a href='https://twitter.com' target="_blank"><img src='https://cdn-icons-png.flaticon.com/512/3938/3938028.png' style={{ height: "50px", width: "50px" }} /></a>&nbsp;&nbsp;
                                <a href='https://in.Linkedin.com' target="_blank"><img src='https://cdn-icons-png.flaticon.com/256/174/174857.png' style={{ height: "50px", width: "50px" }} /></a>&nbsp;&nbsp;

                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}
