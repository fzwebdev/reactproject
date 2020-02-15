import React, { Component } from 'react';

function Newsandblog(props) {
  const content = props.posts.map((post) =>
  <div className="item">
    <div className="gt_blog_wrap">
      <figure>
        <img src="./assets/extra-images/blog-01.jpg" alt=""/>
        <figcaption className="gt_blog_figcaption">
          <ul>
            <li><a href="#"><i className="fa fa-search"></i></a></li>
            <li><a href="#"><i className="fa fa-expand"></i></a></li>
          </ul>
        </figcaption>
      </figure>
      <div className="gt_blog_des_wrap">
        <ul className="gt_blog_meta">
          <li><i className="fa fa-calendar"></i>15 Sep 2016</li>
          <li><i className="fa fa-heart"></i>17</li>
          <li><i className="fa fa-comments"></i>04</li>
        </ul>
        <h5><a href="#">How kids think about earth</a></h5>
        <p>Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsumnibh id elit. </p>
        <a href="#">Read More <i className="fa fa-arrow-circle-o-right"></i></a>
      </div>
    </div>
  </div>
  );
  return (
    <section className="gt_news_bg">
      <div className="container">
        <div className="gt_hdg_1">
          <h3>Latest News and Blog</h3>
          <span><img src="./assets/images/hdg-01.png" alt=""/></span>
        </div>
        <div className="gt_news_slider" id="gt_news_slider">
          {content}
        </div>
      </div>
    </section>
  );
}

export default Newsandblog;