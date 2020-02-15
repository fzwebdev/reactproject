import React, { Component } from 'react';

function Testimonial(props) {
  const content = props.posts.map((post) =>
  <div className="item">
    <div className="gt_testi2_wrap">
      <p>{post.desc}</p>
      <div className="gt_testi2_detail">
        <div className="gt_testi2_name">
          <h6>{post.name}</h6>
          <span>{post.title}</span>
        </div>
        <figure>
          <img src={`./assets/images/${post.icon}`} alt=""/>
        </figure>
      </div>
    </div>
  </div>
  );
  return (
    <section className="gt_testimonial_bg">
      <div className="container">
        <div className="gt_hdg_1 white_hdg">
          <h3>Our Testimonials</h3>
          <span><img src="./assets/images/hdg-01.png" alt=""/></span>
        </div>
        <div className="gt_testimonial2_slider" id="gt_testimonial2_slider">
          {content}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;