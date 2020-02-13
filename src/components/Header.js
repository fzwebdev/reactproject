import React from 'react';

function Header() {
    return (
        
        <header className="">
        <div class="gt_top3_wrap default_width">
            <div class="container">
                <div class="gt_top3_scl_icon">
                    <ul class="gt_hdr3_scl_icon">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div class="gt_hdr_3_ui_element">
                    <ul>
                        <li><i class="fa fa-phone"></i>+124 456 7858</li>
                        <li><i class="fa fa-envelope-o"></i><a href="#">info@kidscenter.com</a></li>
                    </ul>
                </div>
                <div class="gt_hdr3_search">
                    <form>
                        <input type="search" placeholder="Enter your search...">
                        <button><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
        <div class="gt_top3_menu default_width">
            <div class="container">
                <div class="gt-logo">
                    <a href="#"><img src="images/logo.png" alt=""></a>
                </div>
                <nav class="gt_hdr3_navigation">
                    <!-- Responsive Buttun -->
                    <a class="navbar-btn collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>   
                    <!-- Responsive Buttun -->
                    <ul class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <li class="active"><a href="javascript:avoid(0);">Home</a>
                            <ul>
                                <li class="active"><a href="index.html">Home Default</a></li>
                                <li><a href="index-02.html">Home Style 02</a></li>
                                <li><a href="index-03.html">Home Style 03</a></li>
                                <li><a href="index_static.html">Home with Static Banner</a></li>
                                <li><a href="index_fullwidth.html">Home with Fullwidth Banner</a></li>
                                <li><a href="index_video.html">Home with Video Bg</a></li>
                                <li><a href="index_text-rotation.html">Home Banner with Text Rotation</a></li>
                                <li><a href="index-one-page.html">Home One Page</a></li>
                            </ul>
                        </li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="javascript:avoid(0);">Courses</a>
                            <ul>
                                <li><a href="course-grid-style-01-with-sidebar.html">Course Grid Style 01 with Sidebar</a></li>
                                <li><a href="course-grid-style-01-without-sidebar.html">Course Grid Style 01 without Sidebar</a></li>
                                <li><a href="course-grid-style-02-with-sidebar.html">Course Grid Style 02 with Sidebar</a></li>
                                <li><a href="course-grid-style-02-without-sidebar.html">Course Grid Style 02 without Sidebar</a></li>
                                <li><a href="course-listing-style-01.html">Course Listing Style 01</a></li>
                                <li><a href="course-listing-style-02.html">Course Listing Style 02</a></li>
                                <li><a href="course-detail.html">Course Detail</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:avoid(0);">Events</a>
                            <ul>
                                <li><a href="event.html">Event List</a></li>
                                <li><a href="event-detail.html">Event Detail</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:avoid(0);">News</a>
                            <ul>
                                <li><a href="news-grid-style-01-with-sidebar.html">News Grid Style 01 with Sidebar</a></li>
                                <li><a href="news-grid-style-01-without-sidebar.html">News Grid Style 01 without Sidebar</a></li>
                                <li><a href="news-grid-style-02.html">News Grid Style 02</a></li>
                                <li><a href="news-listing-style-01.html">News Listing Style 01</a></li>
                                <li><a href="news-listing-style-02.html">News Listing Style 02</a></li>
                                <li><a href="news-detail.html">News Detail</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:avoid(0);">Team</a>
                            <ul>
                                <li><a href="team-style-01.html">Team Style 01</a></li>
                                <li><a href="team-style-02.html">Team Style 02</a></li>
                                <li><a href="team-detail.html">Team Detail</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:avoid(0);">Pages</a>
                            <ul>
                                <li><a href="user-detail.html">Instructor Dashboard</a></li>
                                <li><a href="user-detail.html">User Dashboard</a></li>
                                <li><a href="price-table.html">Price Table</a></li>
                                <li><a href="gallery-style-01.html">Gallery Column Style 01</a></li>
                                <li><a href="gallery-style-02.html">Gallery Column Style 02</a></li>
                                <li><a href="javascript:avoid(0);">Shop</a>
                                    <ul>
                                        <li><a href="shop-product-01.html">Shop Product Style 01</a></li>
                                        <li><a href="shop-product-02.html">Shop Product Style 02</a></li>
                                        <li><a href="shop-detail.html">Shop Detail</a></li>
                                    </ul>
                                </li>
                                <li><a href="404-page.html">404 Page</a></li>
                                <li><a href="comming-soon.html">Comming Soon</a></li>
                            </ul>
                        </li>
                        <li><a href="contact-us.html">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
 
    );
}

export default Header;