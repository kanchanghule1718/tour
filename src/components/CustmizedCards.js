import React from 'react'
import { Link } from 'react-router-dom'

export default function CustamizedCards(props) {
   let product = props
   return (

      <div className="col-lg-3 mb-3 border-none"  >
         <div className="card border-0 shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "20rem" }} >
            <img src={product.image} className="card-img-top" alt="..." style={{ height: "200px" }} />
            <div className="card-body">
               <h4 className="card-title" style={{ color: "rgb(199, 0, 57 )" }}>{product.name}</h4>
               <p className="card-text" style={{ color: "rgb(16, 118, 147 )" }}><b>Description :</b> {product.description}</p>
               <p className="card-text" style={{ color: "rgb(255, 195, 0 )" }}><b>Category</b> : {product.city}</p>
               <h5 className="card-text" style={{ color: "rgb(144, 12, 63 )" }}>Super Deal Price:&#x20B9;&nbsp;{product.price}</h5>
               <Link to={`/tours/${product.id}`} className="btn btn-outline-danger" >View Tour Details</Link>
            </div>
         </div>
      </div>

   )
}
