import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetchApi'

import IntCards from './int_Card'

export default function International() {
    let [url, setUrl] = useState("http://localhost:3000/products")
    console.log(setUrl);

    let { data: products, isLoading } = useFetch(url)
    return (
        <div>
            {/* <Filteration/> */}
            <div className='container mt-5'>
                <div className='row'>

                    <h2 style={{ color: "rgb(250, 16, 137 )", textAlign: "center" }}> <i>“Take only memories, leave only footprints.”  </i></h2>

                    <div className='col-lg-1'></div>
                    <div className='col-lg-10'>
                        <div class="card mb-3 border-0" style={{ maxWidth: " 1340px" }}>
                            <div class="row g-0">
                                <div class="col-md-6">
                                    <img src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ borderRadius: "10px" }} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                        <h5 class="card-title" style={{ color: "rgb(199, 0, 57 )" }}>World Tour Packages</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. The unpredictable charms spread across the foreign lands, are waiting to be known, waiting to be experienced!</p>
                                        <p class="card-text"><small class="text-body-secondary">Pinning the world map to the wall and choosing a destination on the blindfolded shot of a dart, was an aspiration of the era that lived decades ago. However hard it was in those times, we’ve reached a stage</small></p>
                                        <p class="card-text"><small class="text-body-secondary">Pinning the world map to the wall and choosing a destination on the blindfolded shot of a dart, was an aspiration of the era that lived decades ago. However hard it was in those times, we’ve reached a stage</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="container text-center mt-3 mb-3">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">
                    <div class="col"><img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={180} width={180} alt='' style={{ borderRadius: "10px" }} /> </div>
                    <div class="col"><img src="https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={180} width={180} alt='' style={{ borderRadius: "10px" }} /> </div>
                    <div class="col"><img src="https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={180} width={180} alt='' style={{ borderRadius: "10px" }} /> </div>
                    <div class="col"><img src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={180} width={180} alt='' style={{ borderRadius: "10px" }} /> </div>
                    <div class="col"><img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={180} width={180} alt='' style={{ borderRadius: "10px" }} /> </div>
                    <div class="col"><img src="https://images.unsplash.com/photo-1572099606223-6e29045d7de3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" height={180} width={180} alt='' style={{ borderRadius: "10px" }} /> </div>

                </div>
            </div>

            <div className='container'>
                {isLoading ? "Loading..." :
                    <div className="row ">
                        {
                            products && products.length > 0 ? products && products.map(product => {
                                return (
                                    <IntCards {...product} key={product.id} />
                                )
                            }) : <p>No products with this category</p>

                        }
                    </div>}
            </div>
        </div>
    )
}
