import React, { useState } from 'react'
import './Navbar.css'
import Navbarlist from './Navbarlist';
export default function Navbar() {
    const [com, setcom] = useState("");
    function toggle() {
        let p = <h1>hekko</h1>
        setcom(p);
        console.log(com);
    }
    return (

        <nav className="nav1">
            <div className="item">
                <h4>Sanjoy Mondal</h4>
            </div>
            <div className="Navbar__Link Navbar__Link-toggle" onClick={toggle}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="item item1">
                {/* <ul className="navbar">
              <li className="itemlist">Home</li>
              <li className="itemlist">About</li>
              <li className="itemlist">Portfolio</li>
              <li className="itemlist">Resume</li>
              <li className="itemlist">Contact</li>
          </ul> */}
                <Navbarlist  />
                
            </div>

        </nav>
    )
}
