import React from 'react';
import { Link } from 'react-router-dom';
import Contactform from '../components/ContactForm';
// import logo from './logo.svg';
// import './App.css';


function Contactus() {
    return ( 
        <div className="gt_wrapper">
          <div className="gt_sub_banner_bg default_width">
            <div className="container">
              <div className="gt_sub_banner_hdg  default_width">
                <h3>Contact Us</h3>
                <ul>
                  <li><Link to ="/" >Home</Link></li>
                  <li><Link to ="/contact-us" >Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="gt_main_content_wrap">
            <section class="gt_c_bg">
              <div class="container">
                <div class="gt_contact_info_outer_wrap">
                  <div class="row">
                    <div class="col-md-4 col-sm-6">
                      <div class="gt_contact_info_element_wrap">
                        <i class="fa fa-map-marker"></i>
                        <h5>ADDRESS</h5>
                        <p>4583/15, Opp. LIC Building, Daryaganj,New Delhi-110002</p>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <div class="gt_contact_info_element_wrap active">
                        <i class="fa fa-phone"></i>
                        <h5>Phone Number</h5>
                        <p>011 - 43585858, &nbsp;23285568 </p>
                        
                        <p><i class="fa fa-fax" title="Fax" aria-hidden="true"></i>&nbsp; 011 - 23243519, P.O. Box 7226 </p>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <div class="gt_contact_info_element_wrap">
                        <i class="fa fa-envelope-o"></i>
                        <h5>Email Address</h5>
                        <a href="mailto:info@swaadhyayan.com">info@swaadhyayan.com</a>&nbsp;&nbsp;&nbsp;
                        {/* <a href="#">Support@bulidup.com</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="default_width">
                <div class="map-canvas gt_contact_us_map" id="map-canvas">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.714662173252!2d77.24090210825793!3d28.646861095603025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd209d24bae9%3A0x3c6e712b19d3ef19!2sSwa-Adhyayan!5e0!3m2!1sen!2sin!4v1582523143090!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:'0'}} allowfullscreen=""></iframe>
                </div>
                <Contactform></Contactform>
              </div>
            </section>
          </div>
        </div>
    );
}

export default Contactus;