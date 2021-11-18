import React from 'react'
import './Resume.css'
import photo from '../images/photo.jpg'
//let val=3;
export default function Resume() {

    return (
        <div id="res" className="card-container2">
           <div className="txt-center">
        <h4>Resume</h4>
         <hr className="under" />
        </div>
        
        <div className="res-con">
           
            <div className="box box-1">
                <div className="edu">
                    
                    <div className="card">
                        <h6 className="card-header">
                            IIT Kharagpur | M.Tech
                        </h6>
                        <div className="card-body">
                            <h6 className="card-title">
                             Computer science | 8.28 cgpa | 2019 - 2021
                            </h6>
                            <h6>
                                
                            </h6>
                            <p className="card-text"> Build an ANN model using Particle swarm optimization algorithm</p>

                        </div>
                    </div>

                    <div className="card">
                        <h6 className="card-header">
                            IIT Bhubaneswar | M.sc
                        </h6>
                        <div className="card-body">
                            <h6 className="card-title">Mathematics | 8.35 cgpa | 2017 - 2019</h6>
                            <p className="card-text">Finding independence fractal from a graph</p>

                        </div>
                    </div>
                    <div className="card">
                        <h6 className="card-header">
                            Burdwan University | B.sc
                        </h6>
                        <div className="card-body">
                            <h6 className="card-title">Mathematics | 77% | 2014 - 2017</h6>
        

                        </div>
                    </div>
                    {/* <div className="card">
                        <h6 className="card-header">
                            12th
                        </h6>
                        <div className="card-body">
                            <h6 className="card-title">Science | 78% | 2014</h6>
                        

                        </div>
                    </div>
                    <div className="card">
                        <h6 className="card-header">
                            10th
                        </h6>
                        <div className="card-body">
                            <h6 className="card-title">86% | 2012</h6>
                            

                        </div>
                    </div> */}
                </div>

                <div className="card">
                        <h6 className="card-header">
                        
                        Achievements
                        </h6>
                        <div className="card-body">
                        <span className="badge bg-secondary">Gate 2019, AIR - 286</span>
                        <span className="badge bg-secondary">IIT-JAM 2017, AIR - 461</span>
                        <span className="badge bg-secondary">NET(jrf) June 2018, AIR - 172</span>
                        
                        </div>
                    </div>
                {/* <div className="edu-con">
                       <div className="edu-con1">
                           <div className="edu-text ">
                             <h5>IIT Kharagpur</h5>  
                           </div>
                           <div className="edu-text">
                            2019 - 2021
                           </div>
                       </div>
                       <div className="edu-con1">
                           <div className="edu-text">
                            <h6>IIT Bhubaneswar</h6>  
                           </div>
                           <div className="edu-text">
                               2017 - 2021
                           </div>
                       </div>
                   </div> */}
            </div>
            <div className="box box-2">
                <img src={photo} alt="none" />
                <div className="exp">
                   
                    <div className="card">
                        <h6 className="card-header">
                            Skills
                        </h6>
                        <div className="card-body">
                        
                        <span className="badge bg-secondary">HTML</span>
                        <span className="badge bg-secondary">CSS</span>
                        <span className="badge bg-secondary">JavaScript</span>
                        <span className="badge bg-secondary">ReactJs</span>
                        <span className="badge bg-secondary">SASS</span>
                        <span className="badge bg-secondary">NodeJs</span>
                        <span className="badge bg-secondary">MongoDB</span>
                        <span className="badge bg-secondary">Github</span>
                        
                        <span className="badge bg-secondary">C</span>
                        <span className="badge bg-secondary">C++</span>
                        <span className="badge bg-secondary">Python</span>

                        <span className="badge bg-secondary">Data structure</span>                        
                        <span className="badge bg-secondary">Algorithm</span>
                        <span className="badge bg-secondary">Machine Learning</span>
                        <span className="badge bg-secondary">Deep Learning</span>
                        <span className="badge bg-secondary">Excel</span>

                        </div>
                    </div>
                </div>
                
                   
                    <div className="card">
                        <h6 className="card-header">
                            Exprience
                        </h6>
                        <div className="card-body">
                        Working as <b>Teaching Assistant(T.A)</b> in IIT Kharagpur for the course Object Oriented Programming, Sep 2020 - Nov 2020. Key resposibility was to check and create the assignments. 

                        </div>
                    </div>
                
                
            </div>
        </div>
        </div>
    )
}
