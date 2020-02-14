import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';


function Aboutus() {
    return ( 
        <div className="gt_wrapper">
          <div className="gt_sub_banner_bg default_width">
            <div className="container">
              <div className="gt_sub_banner_hdg  default_width">
                <h3>About Us</h3>
                <ul>
                  <li><Link to ="/" >Home</Link></li>
                  <li><Link to ="/about-us" >About Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Aboutus;