import React from 'react'
import './searching.css'

export default function Searchbar() {
  return (
    <div>
 < div className="d-flex justify-content-between">

      <form className="d-flex justify-content-center searchbar mb-3 mt-3" role="search" >
        <input className="form-control me-2 bg-info bg-opacity-50" style={{border:" 1px solid blue"}} type="search" placeholder="Search" />
        <button className="btn btn-outline-info " type="submit">Search</button>
      </form>




      <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <img  src="https://i.pinimg.com/736x/14/28/e7/1428e7756c2f08bc105c7741a1f16e52.jpg" height={70} width={70}/></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Office Time</h5>
    <h5 id="offcanvasRightLabel">9AM to 7PM</h5>
   
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> <h1>My TRip</h1>
  </div>
  <div class="offcanvas-body">
    <p>lorem ejkbdisughxjhavxgfvshxbkJ</p>
  </div>
</div>


    </div>
    </div>
  )
}
