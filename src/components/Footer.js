import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  const newDate = new Date().getFullYear();
  return (
    <footer>
      <div className="gt_newsltr_bg default_width">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="gt_newsltr_wrap">
                <form>
                  <input type="text" placeholder="Enter your email" />
                  <input className="button_style_1 btn_lg" type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gt_footer_bg default_width">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="gt_office_wrap default_width">
                <div className="gt_foo_about widget">
                  <h5>About Swaadhyayan</h5>
                  <p style={{color:"white"}}>Swa-adhyayan is the most powerful adaptive and comprehensive E-learning, assessment and sharing platform ever for students to identify their learning style and building their progressive proficiency.</p>
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="foo_col_outer_wrap default_width">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="widget">
                      <h5>Quick Links</h5>
                      <ul className="gt_team1_contact_info">
                        <li> <NavLink to="/about-us" >About Us</NavLink></li>
                        <li> <NavLink to="/blogs" >Blogs</NavLink> </li>
                        <li> <NavLink to="/faq" >FaQ</NavLink> </li>
                        <li><a href="https://foreverbooks.co.in/" target="_blank">Forever Books</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="widget">
                      <h5>Policy</h5>
                      <ul className="gt_team1_contact_info">
                        <li> <NavLink to="/privacy-policy" >Privacy Policy</NavLink></li>
                        <li> <NavLink to="/terms-and-conditions" >Terms & Conditions</NavLink> </li>
                        <li> <NavLink to="/disclaimer" >Disclaimer</NavLink> </li>
                        {/* <li> <NavLink to="" activeClassName="active">User guidlines></NavLink> </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright_bg default_width">
        <div class="container">
          <div class="copyright_wrap default_width">
            <p>&copy; {newDate.toString()} <a href="#">Swaadhyayan</a> &nbsp; All Right Reserved.</p>
          </div>
        </div>
      </div> 

    </footer>
  )
}

export default Footer;
