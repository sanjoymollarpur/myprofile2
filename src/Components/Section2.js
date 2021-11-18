import React from 'react'
import './Section2.css'
import photo from '../images/photo.jpg'
import htmli from '../images/htmli.png'
import cssi from '../images/cssi.png'
import jsi from '../images/jsi.png'
import reacti from '../images/reacti.png'
import sass from '../images/sass.png'
import node from '../images/nodelogo.png'
import mongo from '../images/mongo.png'
import github from '../images/github.png'
import bootstrapi from '../images/bootstrapi.svg'
export default function Section2() {
    return (
        <div id="about" className="container2">
            <div className="box box1">
                <img src={photo} alt="none" />
            </div>
            <div className="box box2">
                <h4 >About Me</h4>
                <hr className="under" />
                <p>
                I am an aspirant of Full Stack developer. I am highly passionate about learning new things and trying to apply them to real-world applications.
                </p>
                <p>
                    I have done Master's in Computer Science from IIT Kharagpur. Also I have strong analytic and problem solving skills which help me to solve any kind of problem.
                </p>
                <div className="skills">
                    <h6>Languages/Library/Framworks</h6>
                <div className="icon-con">
                    <div className="img-con">
                    <img src={htmli} alt="" />
                    </div>
                    <div className="img-con">
                    <img src={cssi} alt="" />
                    </div>
                    <div className="img-con">
                    <img src={jsi} alt="" />
                    </div>
                    <div className="img-con">
                    <img src={reacti} alt="" />
                    </div>
                    <div className="img-con">
                    <img src={bootstrapi} alt="" />
                    </div>
                    <div className="img-con">
                    <img src={sass} alt="" />
                    </div>
                    <div className="img-con">
                    <img src={node} alt="" />
                    </div>
                    <div className="img-con">
                    <img src={mongo} alt="" />
                    </div>
                    <div className="img-con">
                    <img src={github} alt="" />
                    </div>
                 
                 
                
                
                 
                
                
                 
                
                </div>
                </div>
                
               
            </div>
        </div>
        
    )
}
