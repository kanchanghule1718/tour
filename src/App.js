import React from 'react'
import CardList from './components/Products/CardList'
import Carousal from './components/carousal'
import Navbar from './components/navbar'
import Searchbar from './components/searchbar'
import Footer from './components/Footer'
import Videos from './videos'

import Filteration from './components/filteration'
import AboutUs from './components/AboutUs'
import International from './components/International'
import Carporate from './components/carporate'
import Customized from './components/Custamized'

export default function App() {
  return (
    <div >
        <Navbar/>
        {/* <Carousal/>
        <Searchbar/>
        <Filteration/>
        <CardList/>
        <Carporate/>
       
        {/* <SampleCard/> */}
        {/* <Videos/>
        <International/>
        <Customized/>
      <AboutUs/>
      <Footer/>  */}
    </div>
  )
}
