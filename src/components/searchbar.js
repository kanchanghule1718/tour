import React from 'react'
import './searching.css'

export default function Searchbar() {
  return (
    <div>
      < div className="d-flex justify-content-between">

        <form className="d-flex justify-content-center searchbar mb-3 mt-3" role="search" >
          <input className="form-control  bg-info bg-opacity-50" style={{ border: " 1px solid blue" }} type="search" placeholder="Search" />
          <button className="btn btn-outline-info " type="submit">Search</button>
        </form>







      </div>
    </div>
  )
}
