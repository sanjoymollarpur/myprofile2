import React from 'react'
import './Contact.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons"
import {faMapMarker} from "@fortawesome/free-solid-svg-icons"
//import email from '../images/email1.png'
//import phone from '../images/phone.png'
//import map from '../images/map.png'
//let val=3;
export default function Contact() {

    return (
        <div id="contact">
          <div className="txt-center">
        <h4>Contact Me</h4>
         <hr className="under" />
        </div>
        
        <div  className="con-con">
            <div className="box box-1">
                <h5>
                Let's connect
                </h5>
                <p>
                    Please contact me by the following details
                </p>
                <div className="icon-con1">
                    <div className="imge">
                   
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    {/* <i className="fal fa-envelope-square fa-5x"></i>
                    <i class="fa-solid fa-envelope fa-5x"></i> */}
                    {/* <i class="fa fa-camera-retro fa-5x"></i> fa-5x */}
                        {/* <img src={email} alt="none" /> */}
                       
                    </div>
                   <div>
                   sanjoymlp2014@gmail.com
                   </div>
                    



                </div>
                <div className="icon-con1">

                    {/* <img src={phone} alt="none" /> */}
                  <div className="imge">
                  <FontAwesomeIcon icon={faPhoneSquareAlt}></FontAwesomeIcon>
                  </div>
                    <div>
                    8145542317
                        </div>
                    



                </div>
                <div className="icon-con1">

                    {/* <img src={map} alt="none" /> */}
                    <div className="imge">
                  <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                  </div>
                    <div>
                    Birbhum, West Bengal - 731216
                    </div>
                    



                </div>



            </div>
            <div className="box box-2">
                <h4>Send me a message</h4>
                
                <form>
                <div className="mb-3">
                        <label required htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="Name" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
        </div>
    )
}