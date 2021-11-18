import React from 'react'
import './Navbar.css'
export default function Navbarlist() {
    return (
        <ul className="navbar">
            <a href="#home">
            <li className="itemlist">Home</li>
            </a>
              
              <a href="#about">
              <li className="itemlist">About</li>
              </a>
              
               <a href="#port">
               <li className="itemlist">Portfolio</li>
               </a>
              
              <a href="#res">
              <li  className="itemlist">Resume</li>
              </a>
              
              
             <a href="#contact">
             <li className="itemlist">Contact</li>
             </a>
              
          </ul>
    )
}
