import React from 'react'

export default function Card2(props) {
    return (
      
        <div className="card" style={{width: "19rem", margin:"1px"}}>
  
  <a href={props.host} rel="noreferrer" target='_blank' >
  <img src={props.img} className="card-img-top" alt="none"/>
  </a>
  
  {/* <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <a href={props.repo} rel="noreferrer" target='_blank' className="btn btn-primary">Github</a>
    <a href={props.host} rel="noreferrer" target='_blank' className="btn btn-primary">Hosting</a>
  </div> */}
</div>
    )
}
