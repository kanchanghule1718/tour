import React, { useState } from 'react'
import Cards from './cards'
import { useFetch } from '../../hooks/useFetchApi'
import Filteration from '../filteration'

export default function CardList() {
let[url,setUrl]=useState("http://localhost:3000/pets")

let{data:products,isLoading}=useFetch(url)

  return (
    
       <div>

         {/* <Filteration/> */}
       <div className="container">

       {/* <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
               <input type="radio" className="btn-check" name="btnradio" id="btnradio1" onClick={() => setUrl("http://localhost:3000/products")} />
               <label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>


               <input type="radio" className="btn-check" name="btnradio" id="btnradio2" onClick={() => setUrl("http://localhost:3000/products?category=mobile")} />
               <label className="btn btn-outline-primary" htmlFor="btnradio2">Mobile</label>

               <input type="radio" className="btn-check" name="btnradio" id="btnradio3" onClick={() => setUrl("http://localhost:3000/products?category=tv")} />
               <label className="btn btn-outline-primary" htmlFor="btnradio3">TV</label>

               <input type="radio" className="btn-check" name="btnradio" id="btnradio4" onClick={() => setUrl("http://localhost:3000/products?category=fridge")} />
               <label className="btn btn-outline-primary" htmlFor="btnradio4">Fridge</label>

               <input type="radio" className="btn-check" name="btnradio" id="btnradio5" onClick={() => setUrl("http://localhost:3000/products?category=ac")} />
               <label className="btn btn-outline-primary" htmlFor="btnradio5">Ac</label>
            </div> */}

               {isLoading ? "Loading..." :
                  <div className="row">
                     {
                        products && products.length > 0 ? products && products.map(product => {
                           return (
                              <Cards {...product} key={product.id} />
                           )
                        }) : <p>No products with this category</p>

                     }
                  </div>}
            </div>
    </div>
  )
}
