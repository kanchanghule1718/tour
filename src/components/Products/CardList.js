import React, { useState } from 'react'
import Cards from './cards'
import { useFetch } from '../../hooks/useFetchApi'
import Filteration from '../filteration'

export default function CardList() {
   let [url, setUrl] = useState("http://localhost:3000/pets")

   let { data: products, isLoading } = useFetch(url)

   return (

      <div>

         {/* <Filteration/> */}
         <div className="container">

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
