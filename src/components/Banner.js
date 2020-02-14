import React, { Component } from 'react';

function Banner() {
  return (
    <div className="gt_banner default_width">
      <div className="swiper-container" id="swiper-container">
        <ul className="swiper-wrapper">
          <li className="swiper-slide">
              <img src="./assets/extra-images/banner-01.jpg" alt=""/>
              <div className="gt_banner_text gt_slide_1">
                  {/* <h3>Welcome to</h3>
                  <h2>kids Center for kids</h2> */}
              </div>
          </li>
          <li className="swiper-slide">
              <img src="./assets/extra-images/banner-02.jpg" alt=""/>
              <div className="gt_banner_text gt_slide_2">
                  {/* <h3>Learning &#38; fun</h3>
                  <h2>Perfevt Education</h2>
                  <h3>Template for your kids</h3>
                  <a href="#">see More</a>
                  <a href="#">Buy Now!</a> */}
              </div>
          </li>
          <li className="swiper-slide">
              <img src="./assets/extra-images/banner-03.jpg" alt=""/>
              <div className="gt_banner_text gt_slide_3">
                  {/* <h3>We will take care</h3>
                  <h2>for your kids</h2>
                  <a href="#">see More</a>
                  <a href="#">Buy Now!</a> */}
              </div>
          </li>
        </ul>
      </div>
      <div className="swiper-button-next"><i className="fa fa-angle-right"></i></div>
      <div className="swiper-button-prev"><i className="fa fa-angle-left"></i></div>
    </div>
  );
}
export default Banner;