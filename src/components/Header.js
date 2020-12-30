import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="">
        <div className="gt_top3_wrap default_width">
            <div className="container">
                <div className="gt_top3_scl_icon">
                    <ul className="gt_hdr3_scl_icon">
                        <li><a href="https://www.facebook.com/info.swaadhyayan/" target='_blank'><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/swaadhyayan/" target='_blank'><i className="fa fa-twitter"></i></a></li>
                        {/* <li><a href="#"><i className="fa fa-google-plus"></i></a></li> */}
                        <li><a href="https://www.instagram.com/swaadhyayan/" target='_blank'><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/swaadhyayan/" target='_blank'><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCdboYQZwOQvTUeehZ0haNyQ" target='_blank'><i className="fa fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div className="gt_hdr_3_ui_element">
                    <ul>
                        <li><i className="fa fa-phone"></i>011 - 43585858</li>
                        <li><i className="fa fa-envelope-o"></i><a href="#">info@swaadhyayan.com</a></li>
                    </ul>
                </div>
                {/* <div className="gt_hdr3_search">
                    <form>
                        <input type="search" placeholder="Enter your search..."/>
                        <button><i className="fa fa-search"></i></button>
                    </form>
                </div> */}
            </div>
        </div>
        <div className="gt_top3_menu default_width">
            <div className="container">
                <div className="gt-logo">
                    <Link to="/"><img src="./assets/images/logo.png" alt=""/></Link>
                </div>
                <nav className="gt_hdr3_navigation">
                    {/* <!-- Responsive Buttun --> */}
                    <a className="navbar-btn collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </a>   
                    {/* <!-- Responsive Buttun --> */}
                    <ul className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <li> <NavLink to="/" exact >Home</NavLink></li>
                        <li> <NavLink to="/about-us" activeClassName="active">About Us</NavLink></li>
                        <li><NavLink to="/services" activeClassName="active">Services</NavLink>
                            {/* <ul>
                                <li><a href="course-grid-style-01-with-sidebar.html">Swa-Learn</a></li>
                                <li><a href="course-grid-style-01-without-sidebar.html">Swa-Assess</a></li>
                                <li><a href="course-grid-style-02-with-sidebar.html">Swa-Share</a></li>
                                <li><a href="course-grid-style-02-without-sidebar.html">Sept</a></li>
                            </ul> */}
                        </li>
                        <li><NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink></li>
                        <li><a href="javascript:avoid(0);">Login</a>
                            <ul>
                                <li><a href="https://www.lms.swaadhyayan.net" target="_blank">For Registered Schools</a></li>
                                <li><a href="https://www.swaadhyayan.com/lms" target="_blank">Others</a></li>
                            </ul>
                        </li>
                        {/* <li><a href="https://www.swaadhyayan.com/lms" target="_blank">Login</a> */}
                            {/* <ul>
                                <li><a href="http://www.swaadhyayan.com/lms" target="_blank">For Others</a></li>
                                <li><a>Biometric</a></li>
                                <li><a href="https://www.swaadhyayan.com/psychometric/login" target="_blank">Psychometric</a></li>
                                <li><a href="https://foreverbooks.co.in/" target="_blank">Forever Books</a></li>
                            </ul> */}
                        {/* </li> */}
                        
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}

export default Header;