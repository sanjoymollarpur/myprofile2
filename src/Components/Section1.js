import React from 'react'
import './Section1.css'
import photo from '../images/photo.jpg'
import img from '../images/SanjoyResume.pdf'
export default function Section1() {
    return (
        <div className="container1">
            <div className="item">
                <h4>Hi, I am Sanjoy Mondal</h4>
                <h4>A Full Stack Developer </h4>
                <br />
                
                
              <p>Get ready to turn ideas into reality</p>
              <a href="#contact"><button className="btn btn1 btn-info">Hire Me</button></a>
                
                <a href={img} target='_blank' rel="noreferrer">
                <button className="btn btn-warning">Get Resume</button>
                </a>
                
            </div>
            <div className="item11 ">
                <img src={photo} alt="none" />
            </div>
            
        </div>
    )
}
