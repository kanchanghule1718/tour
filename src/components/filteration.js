import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './filteration.css'


import { useFetch } from '../hooks/useFetchApi'

export default function Filteration() {
    let[url,setUrl]=useState("http://localhost:3000/products")
    let{pets:product}=useFetch(url)
  return (
    <div>
   
      
      
      <h2 class="fst-italic text-center mt-4 mb-4">Popular Categories</h2>
            <div className='navbarr mb-3' >
            {/* <NavLink to={'/india'}> <button><h4>Incredible India</h4></button></NavLink>   */}
         <div className='filter_pett'>
            <div className='categoryy'>
               <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
               <NavLink to={'/india'}> <button className='border-0 bg-white'><h4>Incredible India</h4></button></NavLink>
            </div>
            <div className='categoryy'>
               <img src="https://media.istockphoto.com/id/1173597900/photo/london-at-colorful-sunrise.jpg?s=2048x2048&w=is&k=20&c=6oLK1SWovV3trvR__QFcJJLJKpjC_DPwguHKESlGQm8=" alt="" />
               <NavLink to={'/international'}> <button className='border-0 bg-white'><h4>International Tours</h4></button></NavLink>
            </div>
            <div className='categoryy'>
               <img src="https://media.istockphoto.com/id/1197663134/photo/businessman-on-business-trip-in-spain.jpg?s=2048x2048&w=is&k=20&c=VUcBcAIXrERG53ZwH0fQ0YaPvNHZUA3I-1paffz3pmo=" alt="" />
               <NavLink to={'/carporate'}> <button className='border-0 bg-white'><h4>Carporate Travel</h4></button></NavLink>
            </div>
             <div className='categoryy'>
               <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
               <NavLink to={'/custam'}> <button className='border-0 bg-white'><h4>Customized Holidays</h4></button></NavLink>
            </div> 
         </div>
      
      </div>
     
    </div>
  )
}
