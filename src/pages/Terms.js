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
        <div className="gt_wrapper termsPage">
          <div className="gt_sub_banner_bg default_width">
            <div className="container">
              <div className="gt_sub_banner_hdg  default_width">
                <h3>Terms and Conditions</h3>
                <ul>
                  <li><Link to ="/" >Home</Link></li>
                  <li><Link to ="/terms-and-conditions">Terms and conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gt_main_content_wrap">
            <section id="features" className="features section-bg">
                <div className="container">
                    <div className="section-title">
                        {/* <h2 data-aos="fade-in">SEPT</h2> */}
                        <h5 data-aos="fade-in">The following terms and conditions will be deemed to have been accepted by the User on usage of the website www.swaadhyayan.com. You are requested to read them carefully before you use the services of this site.</h5>
                    </div>
                    <div className="row content">
                        <div className="col-md-12 pt-4" data-aos="fade-left">
                        <br></br>
                        <p className="card-text">
                            <ul>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> The term ‘User’ shall refer to the user who is browsing the Website. The term ‘Swa-Adhyayan’ shall refer to Swa-Adhyayan and/or its affiliates/subsidiary companies. The term ‘Site’ refers to <a href='/' className='text-primary'>www.swaadhyayan.com</a> . </li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> By using the Site, you agree to follow and be bound by the following terms and conditions concerning your use of the Site. Swa-Adhyayan may revise the Terms of Use at any time without any notice.</li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> All the content present on this site is the exclusive property of Swa-Adhyayan. The software, text, images, graphics, video and audio used on this site solely belong to Swa-Adhyayan. No material from this site may be copied, modified, reproduced, republished, uploaded, transmitted, posted or distributed in any form, whatsoever without prior written permission from Swa-Adhyayan. All rights not expressly granted herein are reserved. Unauthorized use of the materials appearing on this site may violate copyright, trademark and other applicable laws, and could result in criminal and/or civil penalties.</li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> Swa-Adhyayan does not make any warranties, express or implied, including without limitation, those of merchantability and fitness for a particular purpose, with respect to any information, data, statements or products made available on the Site.</li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> Swa-Adhyayan does not accept any responsibility towards the contents and/or information practices of third party Sites, which have links through Swa-Adhyayan Site. The said links to internal or external website locations are only for the purpose of facilitating your visit or clarifying your query.</li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> The Site, and all content, materials, information, software, products and services provided on the Site, are provided on an ‘as is’ and ‘as available’ basis. Swa-Adhyayan expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose and non-infringement.</li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> Swa-Adhyayan shall have no responsibility for any damage to a User's computer system or loss of data that may result from the download of any content, materials and information from the Site. </li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> The User agrees to indemnify, defend and hold Swa-Adhyayan harmless from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, arising out of or relating to any misuse by the User of the content and services provided on the Site. </li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> The information contained in the Site has been obtained from sources believed to be reliable. Swa-Adhyayan disclaims all warranties as to the accuracy, completeness or adequacy of such information. </li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> The User's right to privacy is of paramount importance to Swa-Adhyayan. Any information provided by the User will not be shared with any third party. Swa-Adhyayan reserves the right to use the information to provide the User a personalized online experience. </li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> The Site provides links to Websites and access to content, products and services from third parties, including users, advertisers, affiliates and sponsors of the Site. You agree that Swa-Adhyayan is not responsible for the availability of, and content provided on, third party Websites. The User is requested to peruse the policies posted by other Websites regarding privacy and other topics before use. </li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> Swa-Adhyayan reserves the right in its sole discretion to review, improve, modify or discontinue, temporarily or permanently, the Site or any content or information on the Site with or without notice to User. User agrees that Swa-Adhyayan shall not be liable to User or any third party for any modification or discontinuance of the Site. </li>
                            </ul>
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