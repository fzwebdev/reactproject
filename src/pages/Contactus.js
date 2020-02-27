import React from 'react';
import { Link } from 'react-router-dom';
import Contactform from '../components/ContactForm';
// import logo from './logo.svg';
// import './App.css';


function Contactus() {
  let styles1 = {
    paddingBottom : '0px',
  };
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
          <div className="gt_main_content_wrap">
            <section className="gt_c_bg" style={styles1}>
              <div className="container">
                <div className="gt_contact_info_outer_wrap">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="gt_contact_info_element_wrap">
                        <i className="fa fa-map-marker"></i>
                        <h5>ADDRESS</h5>
                        <p>4583/15, Opp. LIC Building, Daryaganj,New Delhi-110002</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="gt_contact_info_element_wrap active">
                        <i className="fa fa-phone"></i>
                        <h5>Phone Number</h5>
                        <p>011 - 43585858, &nbsp;23285568 </p>
                        
                        <p><i className="fa fa-fax" title="Fax" aria-hidden="true"></i>&nbsp; 011 - 23243519, P.O. Box 7226 </p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="gt_contact_info_element_wrap">
                        <i className="fa fa-envelope-o"></i>
                        <h5>Email Address</h5>
                        <a href="mailto:info@swaadhyayan.com">info@swaadhyayan.com</a>&nbsp;&nbsp;&nbsp;
                        {/* <a href="#">Support@bulidup.com</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="default_width">
                <div className="map-canvas gt_contact_us_map" id="map-canvas">
                  <div className='container'>
                    <div className="row">
                      <div className="col-md-12">
                      <Contactform></Contactform>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
    );
}

export default Contactus;