import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import './filteration.css'


import { useFetch } from '../hooks/useFetchApi'

export default function Filteration() {
   let [url, setUrl] = useState("http://localhost:3000/products")
   let { pets: product } = useFetch(url)
   return (
      <div>

         <div class="container text-center mb-3">
            <h1 style={{ textAlign: "center", marginBottom: "15px", marginTop: "10px", color: "rgb(199, 0, 57 )" }} >Our Special <span style={{ color: "rgb(255, 195, 0 )", textDecoration: "underline" }}>Tour</span> <span style={{ textDecoration: "underline" }}>Plans</span></h1>
            <div class="row">

               <div class="col" style={{ flexDirection: "column" }}> <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height={200} width={200} style={{ borderRadius: "10%", padding: "10px", boxShadow: "5px 5px 5px grey", marginBottom: "10px" }} /><NavLink to={'/india'}> <button className='border-0 bg-white'><h4>Incredible India</h4></button></NavLink></div>
               <div class="col" style={{ flexDirection: "column" }}> <img src="https://media.istockphoto.com/id/1173597900/photo/london-at-colorful-sunrise.jpg?s=2048x2048&w=is&k=20&c=6oLK1SWovV3trvR__QFcJJLJKpjC_DPwguHKESlGQm8=" alt="" height={200} width={200} style={{ margin: "0px 30px", borderRadius: "10%", padding: "10px", boxShadow: "5px 5px 5px grey", marginBottom: "10px" }} /><NavLink to={'/international'}> <button className='border-0 bg-white'><h4>International Tours</h4></button></NavLink></div>
               <div class="col" style={{ flexDirection: "column" }}> <img src="https://media.istockphoto.com/id/1197663134/photo/businessman-on-business-trip-in-spain.jpg?s=2048x2048&w=is&k=20&c=VUcBcAIXrERG53ZwH0fQ0YaPvNHZUA3I-1paffz3pmo= " alt="" height={200} width={200} style={{ margin: "0px 30px", borderRadius: "10%", padding: "10px", boxShadow: "5px 5px 5px grey", marginBottom: "10px" }} /><NavLink to={'/carporate'}> <button className='border-0 bg-white'><h4>Carporate Travel</h4></button></NavLink></div>
               <div class="col" style={{ flexDirection: "column" }}> <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="" height={200} width={200} style={{ margin: "0px 30px", borderRadius: "10%", padding: "10px", boxShadow: "5px 5px 5px grey", marginBottom: "10px" }} /><NavLink to={'/custam'}> <button className='border-0 bg-white'><h4>Customized Holidays</h4></button></NavLink></div>

            </div>
         </div>



      </div>
   )
}
