import React from 'react'
import Card2 from './Card2'
import arr from './Projectdesc'
import './Card1.css'
//let val=3;
export default function Card1() {

    return (
        <div id="port" className="card-container1">
        <div className="txt-center">
        <h4>My Portfolio</h4>
         <hr className="under" />
        </div>
         
         <div className="card-con">
            {arr.map((val, index)=> <Card2 key={index} host={val.host} repo={val.repo} desc={val.desc} 
               date={val.date} title={val.title} img={val.img}/>)}
            
        </div>
        </div>
        
    )
}
