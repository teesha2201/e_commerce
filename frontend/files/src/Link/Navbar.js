import React from 'react'
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import IPhone from '../Component/IPhone';
import Watchs from '../Component/Watch\'s';
import Electronics from '../Component/Electronics';
import All from '../Component/All';
import Mobile from "../Component/Mobile";
import Home from '../Component/Home';
import './Navbar.css' ;
const Navbar = () => {
  return (
    <>
    <div className='routeSuperParent'>
      <BrowserRouter>
        
        <nav className='parent2'>
            <h4 className='firstheading'>"Treat yo'self"</h4>
            <ul className='linkParent'>
                <li><NavLink to="/home" className="links">HOME</NavLink></li>
                <li><NavLink to="/all" className="links">ALL</NavLink></li>
                <li><NavLink to="/mobile" className="links">Mobile</NavLink></li>
                <li><NavLink to="/iphone" className="links">IPhone</NavLink></li>
                <li><NavLink to="/watch" className="links">Watch's</NavLink></li>
                <li><NavLink to="/electronics" className="links">Electronics</NavLink></li>
            </ul>
        </nav>
        <div className='parent3'>
            {/* <span><i class="fa-solid fa-magnifying-glass"></i></span> */}
            

           <ul className='iconsParent'>
            <li><input placeholder='Search here...          🔍' className="searchbar"/></li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
            <li><i class="fa-regular fa-heart"></i></li>
            <li><i class="fa-solid fa-user"></i></li>
           </ul>
        </div>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/all" element={<All/>}/>
                <Route path="/mobile" element={<Mobile/>}/>
                <Route path="/iphone" element={<IPhone/>}/>
                <Route path="/watch" element={<Watchs/>}/>
                <Route path="/electronics" element={<Electronics/>}/>
            </Routes>
      </BrowserRouter>
    </div>
    <div className='slideShowimage'>
    
    </div>
    </>
  )
}

export default Navbar
