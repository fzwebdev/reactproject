import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="">
        <div className="gt_top3_wrap default_width">
            <div className="container">
                <div className="gt_top3_scl_icon">
                    <ul className="gt_hdr3_scl_icon">
                        <li><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div className="gt_hdr_3_ui_element">
                    <ul>
                        <li><i className="fa fa-phone"></i>+124 456 7858</li>
                        <li><i className="fa fa-envelope-o"></i><a href="#">info@kidscenter.com</a></li>
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
                        <li> <NavLink to="/" exact >Home</NavLink>
                        </li>
                        <li> <NavLink to="/about-us" activeClassName="active">About Us</NavLink></li>
                        <li><a href="javascript:avoid(0);">Solution</a>
                            <ul>
                                <li><a href="course-grid-style-01-with-sidebar.html">Swa-Learn</a></li>
                                <li><a href="course-grid-style-01-without-sidebar.html">Swa-Assess</a></li>
                                <li><a href="course-grid-style-02-with-sidebar.html">Swa-Share</a></li>
                                <li><a href="course-grid-style-02-without-sidebar.html">Sept</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:avoid(0);">Gallery</a>
                            <ul>
                                <li><a href="event.html">Event List</a></li>
                                <li><a href="event-detail.html">Event Detail</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:avoid(0);">Login</a>
                            <ul>
                                <li><a href="http://www.swaadhyayan.com/lms" target="_blank">Swa-Adhyayan LMS</a></li>
                                <li><a>Biometric</a></li>
                                <li><a href="https://www.swaadhyayan.com/psychometric/login" target="_blank">Psychometric</a></li>
                                <li><a href="https://foreverbooks.co.in/" target="_blank">Forever Books</a></li>
                            </ul>
                        </li>
                        <li><NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}

export default Header;