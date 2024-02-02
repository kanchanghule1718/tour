import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light m-3" style={{backgroundColor:"rgb(100, 208, 227)"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/home"><img src="https://static.vecteezy.com/system/resources/thumbnails/006/626/965/small/beach-island-landscape-logo-beach-logo-design-beach-logo-outdoor-summer-travel-sun-stock-free-vector.jpg" alt=''   height={50} width={50} style={{backgroundColor:"rgb(100, 208, 227)", borderRadius:"50%"}}/>&nbsp;<b><i>myTrip</i></b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  to={'/home'} className="nav-link " aria-current="page">Home</NavLink>
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
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

    

    </div>
  </div>
</nav>

<Outlet/>
<Footer/>
    </div>
  )
}
