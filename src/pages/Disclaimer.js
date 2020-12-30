import React from 'react';
import { Link } from 'react-router-dom';
// import Contactform from '../components/ContactForm';
// import logo from './logo.svg';
// import './App.css';


function Terms() {
  let styles1 = {
    paddingBottom : '0px',
  };
    return ( 
        <div className="gt_wrapper disclaimerPage">
          <div className="gt_sub_banner_bg default_width">
            <div className="container">
              <div className="gt_sub_banner_hdg  default_width">
                <h3>Disclaimer</h3>
                <ul>
                  <li><Link to ="/" >Home</Link></li>
                  <li><Link to ="/disclaimer">Disclaimer</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gt_main_content_wrap">
            <section id="features" className="features section-bg">
                <div className="container">
                   
                    <div className="row content">
                        <div className="col-md-12 pt-4" data-aos="fade-left">
                        <br></br>
                        <p className="card-text">
                        The information contained in swaadhyayan.com is for general information purposes only. While swaadhyayan.com makes the effort to keep the information upgraded and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the information, products, services, or related graphics contained in this website, for any purpose. Any reliance you place on such information is strictly at your own risk. Swaadhyayan.com takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
                        </p>
                        </div>
                    </div>
                </div>
            </section> 
          </div>
        </div>
    );
}

export default Terms;