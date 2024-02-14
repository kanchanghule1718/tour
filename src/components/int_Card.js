import React from 'react'
import { Link } from 'react-router-dom'

export default function IntCards(props) {
  let product = props
  return (

    <div className="col-lg-6 mb-3 d-flex justify-content-evenly"  >
      <div className="card mb-3  border-none border-0 shadow-lg p-3 bg-body rounded" style={{ maxWidth: " 540px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src={product.image} className="img-fluid rounded-start" alt="..." style={{ height: "260px", borderRadius: "10px", width: "240px" }} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h4 className="card-title" style={{ color: "rgb(199, 0, 57 )" }}>{product.name}</h4>
              <p className="card-text" style={{ color: "rgb(255, 195, 0 )" }}><b>Departure City</b> : {product.city}</p>
              <p className="card-text" style={{ color: "rgb(16, 118, 147 )" }}><b>Description :</b> {product.description}</p>
              <p className="card-text" style={{ color: "rgb(144, 12, 63 )" }}>Super Deal Price:&#x20B9;&nbsp;{product.price}</p>
              <Link to={`/products/${product.id}`} className="btn btn-outline-danger" >View Tour Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}
