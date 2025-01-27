
import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import About from './Pages/About'
import WhatIDo from './Pages/WhatIDo'
import Project from './Pages/Project'
import Body_page from './Pages/Body_page'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'


function App() {
  return (
    
    <>


{/* <Body_page/>
<About/>
<WhatIDo/> 
 <Project/> */}

<Router>

  <Routes>
  <Route path='/' element={<Home/>} />
  {/* <Route path='' element={<About/>}/>
  <Route path='/services' element={ <WhatIDo/>}/>
  <Route path='/' element={<Body_page/>}/>
  <Route path='/projects' element={<Project/>}/> */}

  </Routes>
 
</Router>



    </>

  )
}

export default App