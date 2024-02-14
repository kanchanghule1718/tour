import React, { useState } from 'react'
import './filteration.css'
import { NavLink } from 'react-router-dom'


import { useFetch } from '../hooks/useFetchApi'
import CustamizedCards from './CustmizedCards'

export default function Customized() {
   let [url, setUrl] = useState("http://localhost:3000/tours")

   let { data: products, isLoading } = useFetch(url)

   return (
      <div>

         <div class="container text-center mb-3">
            <h1 style={{ textAlign: "center", marginBottom: "15px" }} >Popular Categories</h1>
            <div class="row d-flex justify-content-evenly" >
               <div className='col-lg-2'>
                  <div class="col" style={{ flexDirection: "column" }}> <img src=" https://plus.unsplash.com/premium_photo-1683133804021-9add4c4a42e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height={200} width={200} style={{ borderRadius: "10%", padding: "10px", boxShadow: "5px 5px 5px grey", marginBottom: "10px" }} /> <button style={{ border: "0px", backgroundColor: "white" }} onClick={() => setUrl("http://localhost:3000/tours?city=family")}><h4>Family Fun</h4></button>
                  </div>
               </div>
               <div className='col-lg-2'>
                  <div class="col" style={{ flexDirection: "column" }}> <img src="https://images.unsplash.com/photo-1569929233287-f0565228c4d4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="" height={200} width={200} style={{ borderRadius: "10%", padding: "10px", boxShadow: "5px 5px 5px grey", marginBottom: "10px" }} /><button style={{ border: "0px", backgroundColor: "white" }} onClick={() => setUrl("http://localhost:3000/tours?city=romantic")}><h4>Romantic Holidays</h4></button></div>
               </div>
               <div className='col-lg-2'>
                  <div class="col" style={{ flexDirection: "column" }}> <img src="https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGljbmljfGVufDB8fDB8fHww " alt="" height={200} width={200} style={{ borderRadius: "10%", padding: "10px", boxShadow: "5px 5px 5px grey", marginBottom: "10px" }} /><button className='overflow-auto' style={{ border: "0px", backgroundColor: "white", textAlign: 'center', width: "100%" }} onClick={() => setUrl("http://localhost:3000/tours")}><h4>Customized Holidays</h4></button></div>
               </div>
               <div className='col-lg-2'>
                  <div class="col" style={{ flexDirection: "column" }}> <img src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="" height={200} width={200} style={{ borderRadius: "10%", padding: "10px", boxShadow: "5px 5px 5px grey", marginBottom: "10px" }} /> <button style={{ border: "0px", backgroundColor: "white" }} onClick={() => setUrl("http://localhost:3000/tours?city=adventure")}><h4>Adventure</h4></button></div>
               </div>
               <div className='col-lg-2'>
                  <div class="col" style={{ flexDirection: "column" }}> <img src="https://images.unsplash.com/photo-1516685304081-de7947d419d5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height={200} width={200} style={{ borderRadius: "10%", padding: "10px", boxShadow: "5px 5px 5px grey", marginBottom: "10px" }} /> <button style={{ border: "0px", backgroundColor: "white", textAlign: 'center' }} onClick={() => setUrl("http://localhost:3000/tours?city=solo")}><h4>Solo Trip</h4></button>
                  </div>
               </div>
            </div>
         </div>










         {isLoading ? "Loading..." :
            <div className="row">
               {
                  products && products.length > 0 ? products && products.map(product => {
                     return (
                        <CustamizedCards {...product} key={product.id} />
                     )
                  }) : <p>No products with this category</p>

               }
            </div>}
      </div>
   )
}
