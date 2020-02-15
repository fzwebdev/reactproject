import React, { Component } from 'react';

function Homegallery(props) {
  const content = props.posts.map((post) =>
  <div className="item">
    <div className="gt_gallery_wrap">
      <img src={`./assets/extra-images/${post.iconName}`} alt=""/>
    </div>
  </div>
  );
  return (
    <section className="gt_gallery_bg">
      <div className="gt_hdg_1">
        <h3>Our Gallery</h3>
        <p>Aenean commodo ligula eget dolor. Aenean massa. <span>elit, eget nibh etlibura.</span></p>
        <span><img src="./assets/images/hdg-01.png" alt=""/></span>
      </div>
      <div className="gt_gallery_slider" id="gt_gallery_slider">
        {content}
      </div>
    </section>
  );
}

export default Homegallery;